import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Collapse, Dropdown, Button } from 'antd';
import Project from '../Project';
import FilterAndSearch from '../../Filter';
import SideMenu from './menu';
import projects from '../../../services/company/projects';

import _ from 'lodash';

const { Panel } = Collapse;
const { getProjects, deleteProject, updateProject, getMoreAds } = projects;

function callback(key) {
  console.log(key);
}

class Projects extends React.Component {
  state = {
    expandIconPosition: 'left',
    deleteModal: false,
    confirmMsg: false,
    editModal: false,
    allProjects: '',
    count: 1,
    moreAds: ''
  };

  async componentDidMount() {
    const allProjects = await getProjects();
    this.setState({
      allProjects
    });
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
    this.setState({
      allProjects: {
        proj: allProjects.proj.concat(moreAds.proj),
        JobAdsCount: allProjects.JobAdsCount.concat(moreAds.JobAdsCount)
      },
      moreAds,
      count
    });
  };

  render() {
    const { expandIconPosition, allProjects, moreAds, count } = this.state;
    return (
      <React.Fragment>
        <Header />
        <div className="company-container">
          <div className="company-projects">
            <FilterAndSearch />
            <div className="projects-header">
              <h2>اسم المشروع</h2>
              <h2>عدد العروض الوظيفية</h2>
              <div></div>
            </div>
            <Button
              className="new-job-btn-mob"
              onClick={() => this.props.history.push('/comany/new/project')}
            >
              <i
                className="fa fa-plus plus-icon"
                aria-hidden="true"
                style={{ marginLeft: '7px' }}
              ></i>
              أضف عرض وظيفي جديد
            </Button>

            <Collapse
              // defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={expandIconPosition}
              className="projects-collapse"
            >
              {_.isArray(allProjects.proj)
                ? allProjects.proj.map((elm, index) => {
                    return (
                      <Panel
                        key={elm._id}
                        className="project-panel"
                        header={
                          <div className="panel-title">
                            <div className="panel-mob">
                              <span>{elm.projectName}</span>{' '}
                              <span className="applicant-num-mob">
                                {' '}
                                عدد المتقدمين :
                              </span>
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
                                />
                              }
                              placement="bottomCenter"
                              trigger="hover"
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
                : ''}
            </Collapse>
            <br />
            {moreAds.totalPages != count && (
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
        {/* <div className="registration-footer"> */}
        <Footer />
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default Projects;
