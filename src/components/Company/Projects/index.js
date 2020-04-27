import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Row, Collapse, Dropdown, Button, Spin } from 'antd';
import Project from '../Project';
import FilterAndSearch from '../Filter';
import SideMenu from './menu';
import projects from '../../../services/company/projects';
import AddNewProjectModal from '../../Header/AddNewProjectModal';
import AddNewAdModal from '../../Header/AddNewAdModal';
import _ from 'lodash';
import { connect } from 'react-redux';
import history from '../../../_core/history';

import {
  addNewProject,
  allCotracts
} from '../../../store/actions/company/projects';
const { Panel } = Collapse;
const { getProjects, deleteProject, updateProject, getMoreAds } = projects;

function callback() {
  // console.log(key);
}

class Projects extends React.Component {
  state = {
    expandIconPosition: 'left',
    deleteModal: false,
    confirmMsg: false,
    editModal: false,
    allProjects: '',
    count: 1,
    moreAds: '',
    loading: true,
    activeOption: 0,
    showOptions: false,
    userInput: '',
    postJobPopup: false,
    newAdPopUp: false
  };

  async componentDidMount() {
    const allProjects = await getProjects();
    const { getContracts } = this.props;
    getContracts();
    this.setState(
      {
        allProjects,
        JobAdsCount: allProjects.JobAdsCount,
        totalPages: allProjects.totalPages,
        projects: allProjects
      },
      () => {
        if (allProjects.totalPages > 1) {
          this.setState({
            loading: false
          });
        }
      }
    );
  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  deletePoject = () => {
    this.setState({
      deleteModal: true
    });
  };

  deleteConfirmation = async id => {
    // const { allProjects } = this.state;
    await deleteProject({ id });
    this.setState({
      deleteModal: false,
      // allProjects: allProjects.proj.filter(project => project._id !== id),
      confirmMsg: true
    });
  };

  cancel = () => {
    this.setState({
      deleteModal: false,
      editModal: false
    });
  };

  editProjectModal = () => {
    this.setState({
      editModal: true
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSelectChange = (value, option) => {
    this.setState(
      {
        [option.props.name]: option.key
      },
      () => {
        const {
          filterOption,
          allProjects,
          JobAdsCount,
          totalPages
        } = this.state;
        const sortedProjects = allProjects.proj.sort((a, b) => {
          if (filterOption === 'new')
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        this.setState({
          allProjects: { proj: sortedProjects, JobAdsCount, totalPages }
        });
      }
    );
  };
  updateProject = async id => {
    const { projectName, projectDescription } = this.state;
    await updateProject({
      id,
      projectName,
      projectDescription
    });
    this.setState({ editModal: false });
    window.location.reload();
  };

  displayMore = async () => {
    let count = this.state.count + 1;
    const { allProjects } = this.state;
    const moreAds = await getMoreAds(count);
    this.setState(
      {
        allProjects: {
          proj: allProjects.proj.concat(moreAds.proj),
          JobAdsCount: allProjects.JobAdsCount.concat(moreAds.JobAdsCount)
        },
        moreAds,
        count
      },
      () => {
        this.setState({
          projects: this.state.allProjects
        });
      }
    );
  };

  // handleFilter = () => {
  //   const { filterOption, allProjects, JobAdsCount, totalPages } = this.state;
  //   const sortedProjects = allProjects.proj.sort((a, b) => {
  //     if (filterOption === 'new')
  //       return new Date(b.date).getTime() - new Date(a.date).getTime();
  //     return new Date(a.date).getTime() - new Date(b.date).getTime();
  //   });
  //   this.setState({
  //     allProjects: { proj: sortedProjects, JobAdsCount, totalPages }
  //   });
  // };

  onClose = () => {
    this.setState({
      visible: false,
      userVisible: false,
      companyVisible: false,
      postJobPopup: false,
      newAdPopUp: false
    });
  };

  handleSearch = e => {
    const { projects, JobAdsCount, totalPages } = this.state;
    const { value } = e.target;

    const filteredOptions = projects.proj.filter(
      elm => elm.projectName.toLowerCase().indexOf(value.toLowerCase()) > -1
    );

    this.setState({
      allProjects: { proj: filteredOptions, JobAdsCount, totalPages },
      activeOption: 0,
      showOptions: true,
      userInput: value
    });
  };

  postJob = () => {
    this.setState({
      postJobPopup: true
    });
  };

  newAd = () => {
    const { addProject } = this.props;
    const { projectName, projectDescription } = this.state;
    addProject({
      projectName,
      projectDescription
    });
    this.setState({
      postJobPopup: false,
      addProject: false,
      newAdPopUp: true
    });
  };

  render() {
    const {
      expandIconPosition,
      allProjects,
      moreAds,
      count,
      loading
    } = this.state;
    const { contracts } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="company-projects">
            <FilterAndSearch
              allProjects={allProjects}
              handleChange={this.handleSelectChange}
              handleSearch={this.handleSearch}
              // handleFilter={this.handleFilter}
            />
            <div className="projects-header">
              <div>اسم المشروع</div>
              <div>عدد العروض الوظيفية</div>
              <span></span>
            </div>
            <div style={{ display: 'flex' }}>
              <Button className="new-job-btn-mob" onClick={this.postJob}>
                <i
                  className="fa fa-plus plus-icon"
                  aria-hidden="true"
                  style={{ marginLeft: '7px' }}
                ></i>
                أضف مشروع جديد
              </Button>
              <Button className="new-job-btn-mob" onClick={this.newAd}>
                <i
                  className="fa fa-plus plus-icon"
                  aria-hidden="true"
                  style={{ marginLeft: '7px' }}
                ></i>
                أضف عرض وظيفي جديد
              </Button>
            </div>
            <AddNewProjectModal
              postJobPopup={this.state.postJobPopup}
              newAd={this.newAd}
              onChange={e => {
                this.setState({ [e.target.name]: e.target.value });
              }}
              closable={this.onClose}
            />
            <AddNewAdModal
              newAdPopUp={this.state.newAdPopUp}
              contractsTypes={contracts}
              history={history}
              closable={this.onClose}
            />
            <Collapse
              // defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={expandIconPosition}
              className="projects-collapse"
            >
              {_.isArray(allProjects.proj) ? (
                allProjects.proj.map((elm, index) => {
                  return (
                    <Panel
                      key={elm._id}
                      className="project-panel"
                      header={
                        <div className="panel-title">
                          {/* <div className="panel-mob">
                            <div>{elm.projectName}</div>{' '}
                            <div className="applicant-num-mob">
                              {' '}
                              عدد المتقدمين :
                            </div>
                            <div className="offers-num">
                              {allProjects.JobAdsCount[index]}
                            </div>
                          </div> */}
                          <div>{elm.projectName}</div>{' '}
                          <div>
                            <div className="offers-num">
                              {allProjects.JobAdsCount[index]}
                            </div>
                          </div>
                          <Dropdown
                            overlay={
                              <SideMenu
                                {...this.state}
                                deletePoject={this.deletePoject}
                                deleteConfirmation={() =>
                                  this.deleteConfirmation(elm._id)
                                }
                                CloseConfirmationMsg={e => {
                                  e.stopPropagation();
                                  this.setState({
                                    confirmMsg: false
                                  });
                                  window.location.reload();
                                }}
                                cancel={this.cancel}
                                onChange={this.handleChange}
                                editProjectModal={this.editProjectModal}
                                updateProject={() =>
                                  this.updateProject(elm._id)
                                }
                                menuVisible={() =>
                                  this.setState({ menuVisible: false })
                                }
                              />
                            }
                            placement="bottomRight"
                            trigger={['hover']}
                          >
                            <span className="options-menu">...</span>
                          </Dropdown>
                        </div>
                      }
                    >
                      <Project {...elm} />
                    </Panel>
                  );
                })
              ) : (
                <div className="spinner-loading">
                  <Spin size="large" />
                </div>
              )}
            </Collapse>
            {/* <br /> */}
            {!loading && moreAds.totalPages !== count && (
              <button
                className="more-projects-offers-btn"
                onClick={this.displayMore}
                style={{ marginTop: '30px' }}
              >
                عرض المزيد
              </button>
            )}
          </div>
        </div>
        {/* <Row> */}
        <Footer />
        {/* </Row> */}
      </React.Fragment>
    );
  }
}
const mapPropsToState = ({ companyProjects }) => {
  return {
    contracts: companyProjects
  };
};
const mapPropsToDispatch = dispatch => {
  return {
    addProject: params => dispatch(addNewProject(params)),
    getContracts: () => dispatch(allCotracts())
  };
};

export default connect(mapPropsToState, mapPropsToDispatch)(Projects);
