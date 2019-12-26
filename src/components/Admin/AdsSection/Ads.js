import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import {
  Table,
  Input,
  InputNumber,
  Form,
  Modal,
  Radio,
  Cascader,
  Menu,
  Dropdown,
  Button,
  DatePicker
} from 'antd';
import moment from 'moment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import ads from '../../../services/adminAdsSection/companyAds';
import statatisticsService from '../../../services/statisticsService';
import delete_icon from '../../../images/delete.svg';
import update_icon from '../../../images/edit.svg';
import add_icon from '../../../images/plus.svg';

const {
  allCities,
  allCountries,
  allMajors,
  sMajor,
  getAllCompanies,
  getCompanyProjects,
  getAllUniversities
} = statatisticsService;

const { TextArea } = Input;
const {
  getAllJobAd,
  // getJob,
  deleteJob,
  addJob,
  // getAllProjects,
  getAllContracts,
  updateJob,
  exportJobs
} = ads;
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
    data: [],
    editingKey: '',
    visible: false,
    deleteVisible: false,
    gender: 1,
    ready: false
  };

  async componentDidMount() {
    const allJobAd = await getAllJobAd();
    if (allJobAd) {
      const allJobAdsData = allJobAd.map(elm => ({
        key: elm._id,
        name: elm.job_Name,
        comany: elm.company,
        project: elm.project ? elm.project.projectName : '',
        city: elm.city ? elm.city.cityName : '',
        work_days: elm.work_days,
        work_hours: elm.work_hours,
        salary: elm.salary,
        descreption: elm.descreption,
        gender: elm.gender,
        isLock: elm.isLock ? 'مفعل' : ' غير مفعل',
        contract: elm.contract ? elm.contract.contractName : '',
        createDate: moment(elm.createDate).format('MMM Do YY')
      }));
      this.setState({ data: allJobAdsData });
    }
    // const job = await getJob({ id: '5dbffb0de7179a296647cd7a' });
    // console.log('jobjobjob', job);
    // const allProjects = await getAllProjects();
    // if (allProjects) {
    //   const allProjectsData = allProjects.map(elm => {
    //     return {
    //       id: elm._id,
    //       value: elm.projectName,
    //       label: elm.projectName
    //     };
    //   });
    //   this.setState({
    //     projects: allProjectsData
    //   });
    // }
    const allContract = await getAllContracts();
    if (allContract) {
      const contracts = allContract.map(elm => {
        return {
          id: elm._id,
          value: elm.contractName,
          label: elm.contractName
        };
      });
      this.setState({
        contracts
      });
    }
    const countries = await allCountries();
    if (countries) this.setState({ countries });
    const cities = await allCities();
    if (cities) this.setState({ cities });
    const majors = await allMajors();
    if (majors) this.setState({ majors });
    const companies = await getAllCompanies();
    if (companies) this.setState({ companies });
    const universities = await getAllUniversities();
    if (universities) this.setState({ universities });
  }

  columns = [
    {
      title: ' الوظيفة',
      dataIndex: 'name',
      width: '10%',
      editable: true
    },
    {
      title: 'المشروع',
      dataIndex: 'project',
      width: '7%'
    },
    {
      title: 'المدينة',
      dataIndex: 'city',
      width: '7%',
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
      title: 'العقد',
      dataIndex: 'contract',
      width: '10%',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return editable ? (
          <Cascader
            className="dropdown-menu "
            options={this.state.contracts}
            onChange={this.contractChange}
            placeholder="العقد"
          />
        ) : (
          <h3>
            {' '}
            {this.state.data.reduce((acc, elm) => {
              if (elm.key === record.key) acc = elm.contract;
              return acc;
            }, '')}{' '}
          </h3>
        );
      }
    },
    {
      title: 'الجنس',
      dataIndex: 'gender',
      width: '7%'
    },
    {
      title: 'الوصف',
      dataIndex: 'descreption',
      width: '10%',
      editable: true
    },
    {
      title: 'تاريخ البدء',
      dataIndex: 'createDate',
      width: '10%'
    },
    {
      title: 'مفعل',
      dataIndex: 'isLock',
      width: '7%',
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
      width: '7%',
      editable: true
    },
    {
      title: ' ساعات العمل',
      dataIndex: 'work_hours',
      width: '15%',
      editable: true
    },
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
          <React.Fragment>
            <Menu>
              <Menu.Item>
                <a rel="noopener noreferrer" onClick={this.showDeleteModal}>
                  <img src={delete_icon} className="delete-icon" alt="" />
                </a>
              </Menu.Item>
            </Menu>
            <Modal
              title="حذف عنصر"
              visible={this.state.deleteVisible}
              onOk={() => {
                this.delete(record.key);
              }}
              onCancel={this.handleCancel}
            >
              <p>هل ترغب حقاً في حذف هذا العنصر</p>
            </Modal>
          </React.Fragment>
        );

        return (
          <Dropdown overlay={menu} placement="topRight">
            <span>...</span>
          </Dropdown>
        );
      }
    },
    {
      title: 'تصدير',
      dataIndex: 'operation',
      render: (text, record) => {
        const { excelData, ready } = this.state;
        return (
          <div>
            <Button onClick={() => this.exportJob(record.key)}>
              {' '}
              تصدير اكسل
            </Button>
            {ready && (
              <div>
                <ReactHTMLTableToExcel
                  id="test-table-xls-button"
                  className="download-table-xls-button"
                  table="table-to-xls"
                  filename="tablexls"
                  sheet="tablexls"
                  buttonText="ready to export"
                />
                <table id="table-to-xls" style={{ display: 'none' }}>
                  <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>number</th>
                  </tr>
                  {excelData
                    ? excelData.map(elm => {
                        return (
                          <tr key={elm.email}>
                            <td>{elm.name ? elm.name : ''}</td>
                            <td>{elm.email ? elm.email : ''}</td>
                            <td>{elm.number ? elm.number : ''}</td>
                          </tr>
                        );
                      })
                    : ''}
                </table>
              </div>
            )}
          </div>
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
          const { contractId, cityId } = this.state;
          const { name, descreption, work_hours, work_days, salary } = row;
          await updateJob({
            id: key,
            contract: contractId,
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

  exportJob = async jobId => {
    const getExportJobs = await exportJobs({
      jobId
    });
    this.setState({ excelData: getExportJobs, ready: true });
  };
  delete = async key => {
    const { data } = this.state;
    await deleteJob({
      id: key
    });
    this.setState({
      data: data.filter(job => job.key !== key),
      deleteVisible: false
    });
  };

  addJobModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = async () => {
    const {
      data,
      jobName,
      description,
      salary,
      personal_skills,
      gender,
      workDays,
      workHour,
      contractId,
      countryId,
      cityId,
      company,
      projectId,
      major,
      universty,
      sMajorId,
      required_Number,
      // active
      date
    } = this.state;
    const addedJob = await addJob({
      contract: contractId,
      job_Name: jobName,
      descreption: description,
      company: company ? company.id : '',
      project: projectId,
      public_Major: major ? major.id : '',
      spMajor: sMajorId,
      country: countryId,
      city: cityId,
      universty,
      work_hours: workHour,
      work_days: workDays,
      salary,
      // isLock: active,
      gender: gender === 1 ? 'male' : 'female',
      personal_Skills: personal_skills,
      required_Number,
      startDate: date
    });
    if (addedJob) {
      await data.push({
        name: addedJob.job_Name,
        key: addedJob._id,
        comany: addedJob.company,
        project: addedJob.project ? addedJob.project.projectName : '',
        city: addedJob.city ? addedJob.city.cityName : '',
        university: addedJob.university,
        work_days: addedJob.work_days,
        work_hours: addedJob.work_hours,
        salary: addedJob.salary,
        descreption: addedJob.descreption,
        gender: addedJob.gender,
        isLock: addedJob.isLock ? 'مفعل' : ' غير مفعل',
        contract: addedJob.contract ? addedJob.contract.contractName : '',
        createDate: addedJob.startDate
      });
      this.setState({
        data,
        jobName: '',
        description: '',
        salary: '',
        personal_skills: '',
        gender: 1,
        workDays: '',
        workHour: '',
        required_Number: '',
        // date: new Date(),
        cities: [],
        universities: [],
        countries: [],
        companies: [],
        majors: [],
        sMajor: [],
        contracts: [],
        visible: false
      });
    }
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      deleteVisible: false
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleRadioChange = e => {
    this.setState({
      gender: e.target.value
    });
  };

  handleWorkHoursChange = e => {
    this.setState({
      workHour: e
    });
  };
  handleWorkDaysChange = e => {
    this.setState({
      workDays: e
    });
  };
  handleSalaryChange = e => {
    this.setState({
      salary: e
    });
  };
  handleReqNumberChange = e => {
    this.setState({
      required_Number: e
    });
  };
  contractChange = (value, selectedOptions) => {
    this.setState({
      contractId: selectedOptions[0].id
    });
  };
  countryChange = (value, selectedOptions) => {
    this.setState({
      countryId: selectedOptions[0].id
    });
  };
  cityChange = (value, selectedOptions) => {
    this.setState({
      cityId: selectedOptions[0].id
    });
  };

  // handleStatusChange = checked => {
  //   this.setState({
  //     active: checked
  //   });
  // };

  majorChange = (value, selectedOptions) => {
    this.setState(
      {
        major: selectedOptions[0]
      },
      async () => {
        const { major } = this.state;
        const allSMajor = await sMajor(major.id);
        this.setState({ sMajor: allSMajor });
      }
    );
  };
  sMajorChange = (value, selectedOptions) => {
    this.setState({
      sMajorId: selectedOptions[0].id
    });
  };

  companyChange = (value, selectedOptions) => {
    this.setState(
      {
        company: selectedOptions[0]
      },
      async () => {
        const { company } = this.state;
        if (company) {
          const companyProjects = await getCompanyProjects({
            id: company.id
          });
          this.setState({ projects: companyProjects });
        }
      }
    );
  };

  projectChange = (value, selectedOptions) => {
    if (selectedOptions) {
      this.setState({
        projectId: selectedOptions[0].id
      });
    }
  };

  universityChange = (value, selectedOptions) => {
    if (selectedOptions[0]) {
      this.setState({
        universty: selectedOptions[0].id
      });
    }
  };

  sMajorChange = (value, selectedOptions) => {
    if (selectedOptions[0]) {
      this.setState({
        sMajorId: selectedOptions[0].id
      });
    }
  };

  dateChange = date => {
    this.setState({ date });
  };

  showDeleteModal = () => {
    this.setState({
      deleteVisible: true
    });
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
        <div className="ads-images-container">
          <img
            src={add_icon}
            className="ads-add-icon"
            alt="وظيفة جديدة"
            onClick={this.addJobModal}
          />
        </div>
        <Modal
          title="اضافة وظيفة جديدة"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input
            className="add-job"
            placeholder="الوظيفة "
            name="jobName"
            value={this.state.jobName}
            onChange={this.handleInputChange}
            required
          />
          <TextArea
            className="add-job"
            placeholder="الوصف "
            name="description"
            value={this.state.description}
            onChange={this.handleInputChange}
            required
          />
          <TextArea
            placeholder="مهارات شخصية "
            onChange={this.handleInputChange}
            name="personal_skills"
            value={this.state.personal_skills}
            className="add-job"
            required
          />
          <label>عدد المطلوبين :</label>
          <InputNumber
            onChange={this.handleReqNumberChange}
            className="add-job"
            value={this.state.required_Number}
            required
          />
          <label>الراتب :</label>
          <InputNumber
            className="add-job"
            onChange={this.handleSalaryChange}
            value={this.state.salary}
          />
          <div className="gender">
            <label> الجنس : </label>
            <Radio.Group
              onChange={this.handleRadioChange}
              value={this.state.gender}
            >
              <Radio value={1}>ذكر</Radio>
              <Radio value={2}>انثى</Radio>
            </Radio.Group>
          </div>
          <Cascader
            className="dropdown-menu"
            options={this.state.companies}
            onChange={this.companyChange}
            placeholder="الشركة"
            required
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.projects}
            onChange={this.projectChange}
            placeholder="المشروع"
            required
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.majors}
            onChange={this.majorChange}
            placeholder="التخصص العام"
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.sMajor}
            onChange={this.sMajorChange}
            placeholder="التخصص الدقيق"
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.universities}
            onChange={this.universityChange}
            placeholder="الجامعة"
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.contracts}
            onChange={this.contractChange}
            placeholder="العقد"
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.countries}
            onChange={this.countryChange}
            placeholder="الدولة"
          />
          <Cascader
            className="dropdown-menu"
            options={this.state.cities}
            onChange={this.cityChange}
            placeholder="المدينة"
          />
          <div className="job-information">
            <label> أيام العمل :</label>
            <InputNumber
              onChange={this.handleWorkDaysChange}
              className="work-days"
              value={this.state.workDays}
            />
          </div>
          <div className="job-information">
            <label> ساعات العمل :</label>
            <InputNumber
              onChange={this.handleWorkHoursChange}
              value={this.state.workHour}
            />
          </div>
          <label>تاريخ البدء : </label>
          <DatePicker
            onChange={this.dateChange}
            style={{ width: '200px', marginLeft: '20px' }}
            // value={this.state.date}
          />
          {/* <div className="job-information">
            <label> حالة التفعيل :</label>
            <Switch
              onChange={this.handleStatusChange}
              name="status"
              className="job-activate"
            />
          </div> */}
        </Modal>
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

const CompanyAds = Form.create()(EditableTable);

export default CompanyAds;
