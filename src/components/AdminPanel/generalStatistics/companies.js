import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form } from 'antd';
const EditableContext = React.createContext();

class EditableTable extends React.Component {
  state = {
    data: [],
    editingKey: '',
    visible: false,
    university: ''
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const {
        dailyAds,
        weeklyAds,
        monthlyAds,
        periodAds
      } = this.props.generalStatistics;

      if (dailyAds) this.setState({ data: dailyAds.companies });

      if (monthlyAds) this.setState({ data: monthlyAds.companies });

      if (weeklyAds) this.setState({ data: weeklyAds.companies });

      if (periodAds) this.setState({ data: periodAds.companies });
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
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'boolean' ? 'boolean' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });
    return (
      <React.Fragment>
        <EditableContext.Provider value={this.props.form}>
          <Table
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
