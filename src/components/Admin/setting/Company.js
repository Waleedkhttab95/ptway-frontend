import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import { Table, Input, InputNumber, Form, Button } from 'antd';
import companySettingServices from '../../../services/adminSetting/company';

const { getCompanyRequest, companyApproval } = companySettingServices;
const EditableContext = React.createContext();

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      // inputType,
      record,
      // index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`
                }
              ],
              initialValue: record[dataIndex]
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return (
      <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const companyRequest = await getCompanyRequest();
    if (companyRequest) {
      const allcompanyRequestData = companyRequest.map(elm => ({
        key: elm._id,
        company_name: elm.companyName,
        company_email: elm.email,
        sector: elm.sector,
        CompanySpecialist: elm.CompanySpecialist
          ? elm.CompanySpecialist.specialistName
          : '',
        createDate: elm.createDate,
        isActive: elm.isActive ? 'مفعل' : 'غير مفعل',
        isConfirmed: elm.isConfirmed ? 'مؤكد' : 'غير مؤكد'
      }));
      this.setState({ data: allcompanyRequestData });
    }
  }

  columns = [
    {
      title: 'الشركة',
      dataIndex: 'company_name',
      width: '15%'
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'company_email',
      width: '15%'
    },
    {
      title: 'القطاع',
      dataIndex: 'sector',
      width: '10%'
    },
    {
      title: 'التخصص',
      dataIndex: 'CompanySpecialist',
      width: '15%'
    },
    {
      title: 'تاريخ الانشاء',
      dataIndex: 'createDate',
      width: '15%'
    },
    {
      title: 'حالة التأكيد',
      dataIndex: 'isActive',
      width: '10%'
    },
    {
      title: 'حالة التفعيل',
      dataIndex: 'isConfirmed',
      width: '10%'
    },
    {
      title: 'تفعيل الشركة',
      width: '15%',
      dataIndex: 'operation',
      render: (text, record) => (
        <a onClick={() => this.approve(record.key)}>
          <Button className="activate-company-account"> تفعيل</Button>
        </a>
      )
    }
  ];

  isEditing = record => record.key === this.state.editingKey;

  approve = async id => {
    const approveStatus = await companyApproval({ id });
    if (approveStatus === 'Updated') alert('تم تفعيل الحساب');
  };

  render() {
    const components = {
      body: {
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <React.Fragment>
        <h3 className="company-request-title">طلبات الشركات الخيرية</h3>
        <EditableContext.Provider value={this.props.form}>
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={columns}
            rowClassName="editable-row"
            pagination={{
              onChange: this.cancel
            }}
          />
        </EditableContext.Provider>
      </React.Fragment>
    );
  }
}

const CompanySetting = Form.create()(EditableTable);

export default CompanySetting;
