import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form, Card } from 'antd';
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
        this.setState({ data: dailyData, counts: dailyAds });
      }

      if (monthlyAds) {
        const monthlyData = filteredData(monthlyAds);
        this.setState({ data: monthlyData, counts: monthlyAds });
      }

      if (weeklyAds) {
        const weeklyData = filteredData(weeklyAds);
        this.setState({ data: weeklyData, counts: weeklyAds });
      }
      if (periodAds) {
        const periodData = filteredData(periodAds);
        this.setState({ data: periodData, counts: periodAds });
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
    console.log('this state', this.props.generalStatistics);

    const { counts } = this.state;
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
        <div className="daily-stat">
          <i className="fa fa-user" aria-hidden="true"></i>
          <Card
            className="card-body  user-card fa-fa-user"
            title="المسستخدمين"
            bordered={false}
          >
            <p className="card-text">{counts ? counts.usersCount : ''}</p>
          </Card>
          <Card
            className="card-body company-card"
            title="الشركات"
            bordered={false}
          >
            <p className="card-text">{counts ? counts.companiesCount : ''}</p>
          </Card>
          <Card className="card-body job-card" title="الوظائف" bordered={false}>
            <p className="card-text">{counts ? counts.jobsCount : ''}</p>
          </Card>
        </div>
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
