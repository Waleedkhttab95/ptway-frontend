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
const { getProjects } = projects;

function callback(key) {
  console.log(key);
}

class Projects extends React.Component {
  state = {
    expandIconPosition: 'left',
    deleteModal: false,
    confirmMsg: false,
    allProjects: ''
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

  deleteConfirmation = event => {
    event.stopPropagation();
    this.setState({
      deleteModal: false,
      confirmMsg: true
    });
  };
  render() {
    const { expandIconPosition, allProjects } = this.state;
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
                      // <React.Fragment key={elm._id}>
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
                              overlay={<SideMenu {...this.state} />}
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
          </div>
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Projects;
