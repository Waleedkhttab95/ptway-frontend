import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form } from 'antd';
const EditableContext = React.createContext();

const filteredData = fun => {
  return fun.users.map(elm => {
    return {
      firstName: elm.firstName,
      lastName: elm.lastName,
      email: elm.email,
      isConfirmed: elm.isConfirmed ? 'true' : 'false'
    };
  });
};
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

      if (dailyAds) {
        const dailyData = filteredData(dailyAds);
        this.setState({ data: dailyData });
      }

      if (monthlyAds) {
        const monthlyData = filteredData(monthlyAds);
        this.setState({ data: monthlyData });
      }

      if (weeklyAds) {
        const weeklyData = filteredData(weeklyAds);
        this.setState({ data: weeklyData });
      }
      if (periodAds) {
        const periodData = filteredData(periodAds);
        this.setState({ data: periodData });
      }
    }
  }

  columns = [
    {
      title: 'الاسم الأول',
      dataIndex: 'firstName',
      width: '15%',
      editable: true
    },
    {
      title: 'الاسم الأخير',
      dataIndex: 'lastName',
      width: '15%',
      editable: true
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      width: '15%',
      editable: true
    },
    {
      title: 'حالة التفعيل',
      dataIndex: 'isConfirmed',
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
            pagination={{
              onChange: this.cancel
            }}
          />
        </EditableContext.Provider>
      </React.Fragment>
    );
  }
}

const UsergeneralStatistics = Form.create()(EditableTable);

export default UsergeneralStatistics;
