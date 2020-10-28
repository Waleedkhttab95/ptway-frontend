import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form, message } from 'antd';
import generalStatistics from '../../../services/generalStatistics';

const EditableContext = React.createContext();
const { blockCompany } = generalStatistics;

const filteredData = fun => {
  return fun.companies.map(elm => {
    return {
      id: elm._id,
      companyName: elm.companyName,
      email: elm.email,
      superVisor: elm.superVisor,
      sector: elm.sector,
      CompanySpecialist: elm.CompanySpecialist
        ? elm.CompanySpecialist.specialistName
        : '',
      isActive: elm.isActive ? 'true' : 'false',
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

  handleCompanyBlock = async record => {
    try {
      await blockCompany({ id: record.id });
      message.success('لقد تم إيقاف الشركة بنجاح');
    } catch (error) {
      console.log(error);
    }
  };

  blockCompany = (text, record) => {
    return <a onClick={() => this.handleCompanyBlock(record)}>ايقاف</a>;
  };

  columns = [
    {
      title: 'اسم الشركة',
      dataIndex: 'companyName',
      width: '10%'
    },
    {
      title: 'البريد الالكتروني',
      dataIndex: 'email',
      width: '20%'
    },
    {
      title: 'القطاع',
      dataIndex: 'sector.sectorName',
      width: '10%'
    },
    {
      title: 'التخصص',
      dataIndex: 'CompanySpecialist.specialistName',
      width: '10%'
    },
    {
      title: 'رقم المشرف',
      dataIndex: 'superVisor.phone',
      width: '10%'
    },
    {
      title: 'الحساب نشط؟',
      dataIndex: 'isActive',
      width: '15%'
    },
    {
      title: 'حالة التفعيل',
      dataIndex: 'isConfirmed',
      width: '15%'
    },
    {
      title: 'ايقاف الشركة',
      render: (text, record) => this.blockCompany(text, record),
      width: '15%'
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
        <EditableContext.Provider value={this.props.form} key={this.props.form}>
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

const CompanyGeneralStatistics = Form.create()(EditableTable);

export default CompanyGeneralStatistics;
