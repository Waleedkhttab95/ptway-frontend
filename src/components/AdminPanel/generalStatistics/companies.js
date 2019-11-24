import React from 'react';
import 'antd/dist/antd.css';
import { Table, Input, InputNumber, Form } from 'antd';
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
      inputType,
      record,
      index,
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
    data: [],
    editingKey: '',
    visible: false,
    university: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { dailyAds, weeklyAds, monthlyAds } = this.props.generalStatistics;

      if (dailyAds) {
        this.setState({ data: dailyAds.companies });
      }
      if (monthlyAds) {
        this.setState({ data: monthlyAds.companies });
      }
      if (weeklyAds) {
        this.setState({ data: weeklyAds.companies });
      }
    }
  }

  columns = [
    {
      title: 'اسم الشركة',
      dataIndex: 'companyName',
      width: '15%'
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      width: '15%'
    },
    {
      title: 'القطاع',
      dataIndex: 'sector',
      width: '15%'
    },
    {
      title: 'التخصص',
      dataIndex: 'CompanySpecialist.specialistName',
      width: '15%'
    },
    {
      title: 'حالة التأكيد',
      dataIndex: 'isActive',
      width: '15%'
    },
    {
      title: 'حالة التفعيل',
      dataIndex: 'isConfirmed',
      width: '15%'
    }
  ];

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
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
    console.log('this.props after', this.props);

    return (
      <React.Fragment>
        {/* <RangePicker onChange={this.onChange} />  */}
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

const CompanyGeneralStatistics = Form.create()(EditableTable);

export default CompanyGeneralStatistics;
