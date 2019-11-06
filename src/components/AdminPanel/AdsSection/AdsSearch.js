import React from 'react';
import 'antd/dist/antd.css';
import './ads.scss';
import { Table, Input, Row, InputNumber, Form } from 'antd';
import ads from '../../../services/adminAdsSection/companyAds';
import search from '../../../images/search-icon.svg';

const { getJobByEmail } = ads;
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
    gender: 1,
    searchResult: []
  };

  async componentDidMount() {}

  columns = [
    {
      title: ' الوظيفة',
      dataIndex: 'name',
      width: '15%',
      editable: true
    },
    {
      title: 'اسم الشركة',
      dataIndex: 'company_name',
      width: '15%'
    },
    {
      title: 'المدينة',
      dataIndex: 'city',
      width: '15%'
    },
    {
      title: 'تخصص الشركة',
      dataIndex: 'company_sector',
      width: '15%'
    },
    {
      title: 'ايميل الشركة',
      dataIndex: 'company_email',
      width: '15%'
    },
    {
      title: 'الجنس',
      dataIndex: 'gender',
      width: '15%'
    },
    {
      title: 'الوصف',
      dataIndex: 'descreption',
      width: '15%',
      editable: true
    },
    {
      title: 'مفعل',
      dataIndex: 'isLock',
      width: '15%',
      editable: true
    },
    {
      title: 'ايام العمل',
      dataIndex: 'work_days',
      width: '15%',
      editable: true
    },
    {
      title: 'الراتب',
      dataIndex: 'salary',
      width: '15%',
      editable: true
    },
    {
      title: ' ساعات العمل',
      dataIndex: 'work_hours',
      width: '15%',
      editable: true
    },
    {
      title: 'تاريخ الانشاء',
      dataIndex: 'createDate',
      width: '5%'
    }
  ];

  adSearchChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSearch = async () => {
    const { email } = this.state;
    const getSearchResult = await getJobByEmail({
      email
    });
    if (getSearchResult) {
      const allSearchAdsData = getSearchResult.map(elm => ({
        key: elm._id,
        name: elm.job_Name,
        company_name: elm.company ? elm.company.companyName : '',
        company_email: elm.company ? elm.company.email : '',
        company_sector: elm.company ? elm.company.sector : '',
        project: elm.project ? elm.project.projectName : '',
        city: elm.city ? elm.city.cityName : '',
        work_days: elm.work_days,
        work_hours: elm.work_hours,
        salary: elm.salary,
        descreption: elm.descreption,
        gender: elm.gender,
        isLock: elm.isLock ? 'مفعل' : ' غير مفعل',
        contract: elm.contract ? elm.contract.contractName : '',
        createDate: elm.createDate
      }));
      this.setState({ data: allSearchAdsData });
    }
    this.setState({
      searchResult: getSearchResult
    });
  };

  render() {
    const { searchResult } = this.state;
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
          title: col.title
          //   editing: this.isEditing(record)
        })
      };
    });

    return (
      <React.Fragment>
        <Row>
          <div className="input-container ads-search">
            <Input
              placeholder="بحث عن مشاريع شركة"
              onChange={this.adSearchChange}
            />
            <button className="search-button" onClick={this.handleSearch}>
              <img className="search-icon" src={search} alt="" />
            </button>
          </div>
        </Row>
        {searchResult && (
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
        )}
      </React.Fragment>
    );
  }
}

const AdsSearch = Form.create()(EditableTable);

export default AdsSearch;
