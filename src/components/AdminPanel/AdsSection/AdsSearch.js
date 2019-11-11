import React from 'react';
import 'antd/dist/antd.css';
import './ads.scss';
import {
  Table,
  Input,
  Row,
  InputNumber,
  Form,
  Cascader,
  Menu,
  Dropdown
} from 'antd';
import search from '../../../images/search-icon.svg';
import statatisticsService from '../../../services/statisticsService';
import ads from '../../../services/adminAdsSection/companyAds';
import delete_icon from '../../../images/delete.svg';
import update_icon from '../../../images/edit.svg';

const { allCities } = statatisticsService;

const { getJobByEmail, updateJob, deleteJob } = ads;
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
    gender: 1,
    cities: [],
    searchResult: []
  };

  async componentDidMount() {
    const allCitiesData = await allCities();
    this.setState({
      cities: allCitiesData
    });
  }

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
      width: '15%',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return editable ? (
          <Cascader
            className="dropdown-menu "
            options={this.state.cities}
            onChange={this.cityChange}
            placeholder=" المدينة"
          />
        ) : (
          <h3>
            {' '}
            {this.state.data.reduce((acc, elm) => {
              console.log('elm', elm);

              if (elm.key === record.key) {
                acc = elm.city;
              }
              return acc;
            }, '')}{' '}
          </h3>
        );
      }
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
      width: '15%'
      //   editable: true
    },
    // {
    //   title: 'تاريخ الانشاء',
    //   dataIndex: 'createDate',
    //   width: '5%'
    // },
    {
      title: 'تعديل',
      dataIndex: 'operation',
      render: (text, record) => {
        const { editingKey } = this.state;
        const editable = this.isEditing(record);
        return editable ? (
          <span>
            <EditableContext.Consumer>
              {form => (
                <a
                  onClick={() => this.save(form, record.key)}
                  style={{ marginRight: 8 }}
                >
                  حفظ
                </a>
              )}
            </EditableContext.Consumer>
            {/* <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}> */}
            <a
              onClick={() => this.cancel(record.key)}
              style={{ marginRight: 8 }}
            >
              الغاء
            </a>
            {/* </Popconfirm> */}
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
            <img className="update-icon" src={update_icon} alt="" />
          </a>
        );
      }
    },
    {
      title: 'حذف',
      dataIndex: 'operation',
      render: (text, record) => {
        const menu = (
          <Menu>
            <Menu.Item>
              <a
                rel="noopener noreferrer"
                onClick={() => this.delete(record.key)}
              >
                <img src={delete_icon} className="delete-icon" alt="" />
              </a>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} placement="topRight">
            <span>...</span>
          </Dropdown>
        );
      }
    }
  ];

  isEditing = record => record.key === this.state.editingKey;

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: '' }, async () => {
          const { cityId } = this.state;
          console.log('cityId', cityId);

          const { name, descreption, work_hours, work_days, salary } = row;
          await updateJob({
            id: key,
            job_Name: name,
            // country,
            city: cityId,
            work_hours,
            work_days,
            salary,
            descreption
            // required_Number,
            // startDate: new Date()
          });
        });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  edit(key) {
    this.setState({ editingKey: key });
  }

  delete = async key => {
    const { data } = this.state;
    await deleteJob({
      id: key
    });
    this.setState({
      data: data.filter(job => job.key !== key)
    });
  };

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
  cityChange = (value, selectedOptions) => {
    this.setState({
      cityId: selectedOptions[0].id
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
          title: col.title,
          editing: this.isEditing(record)
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
