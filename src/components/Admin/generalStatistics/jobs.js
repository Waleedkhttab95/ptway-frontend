import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form } from 'antd';
const EditableContext = React.createContext();

class EditableTable extends React.Component {
  state = {
    data: []
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const {
        dailyAds,
        weeklyAds,
        monthlyAds,
        periodAds
      } = this.props.generalStatistics;

      if (dailyAds) this.setState({ data: dailyAds.jobs });

      if (monthlyAds) this.setState({ data: monthlyAds.jobs });

      if (weeklyAds) this.setState({ data: weeklyAds.jobs });

      if (periodAds) this.setState({ data: periodAds.jobs });
    }
  }

  columns = [
    {
      title: 'الوظيفة ',
      dataIndex: 'job_Name',
      width: '5%',
      editable: true
    },
    {
      title: 'الشركة',
      dataIndex: 'company.companyName',
      width: '5%',
      editable: true
    },
    {
      title: 'الوصف',
      dataIndex: 'descreption',
      width: '10%',
      editable: true
    },
    {
      title: 'المدينة',
      dataIndex: 'city.cityName',
      width: '10%',
      editable: true
    },
    {
      title: 'ساعات العمل',
      dataIndex: 'work_hours',
      width: '5%',
      editable: true
    },
    {
      title: 'ايام العمل',
      dataIndex: 'work_days',
      width: '5%',
      editable: true
    },
    {
      title: 'الراتب',
      dataIndex: 'salary',
      width: '5%',
      editable: true
    },
    {
      title: 'العقد',
      dataIndex: 'contract.contractName',
      width: '5%',
      editable: true
    },
    {
      title: 'التاريخ',
      dataIndex: 'createDate',
      width: '15%',
      editable: true
    }
  ];

  render() {
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
          title: col.title
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
          />
        </EditableContext.Provider>
      </React.Fragment>
    );
  }
}

const JobsGeneralStatistics = Form.create()(EditableTable);

export default JobsGeneralStatistics;
