import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import { Collapse, Icon } from 'antd';
import Project from '../Project';
import FilterAndSearch from '../../Filter';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

class Projects extends React.Component {
  state = {
    expandIconPosition: 'left'
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  render() {
    const { expandIconPosition } = this.state;
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
            <Collapse
              // defaultActiveKey={['1']}
              onChange={callback}
              expandIconPosition={expandIconPosition}
              className="projects-collapse"
            >
              <Panel
                header={
                  <div className="panel-title">
                    <div>
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <div className="offers-num">294</div>
                    </div>
                    <Icon
                      type="setting"
                      onClick={event => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                      }}
                    />
                  </div>
                }
                key="1"
                // extra={genExtra()}
              >
                <Project />
              </Panel>
              <br />
              <Panel
                header={
                  <div className="panel-title">
                    <div>
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <div className="offers-num">294</div>
                    </div>
                    <Icon
                      type="setting"
                      onClick={event => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                      }}
                    />
                  </div>
                }
                key="2"
              >
                <Project />
              </Panel>
              <br />
              <Panel
                header={
                  <div className="panel-title">
                    <div>
                      <span>مشروع تأمين جميع أفرع الشركة التجارية</span>{' '}
                      <div className="offers-num">294</div>
                    </div>
                    <Icon
                      type="setting"
                      onClick={event => {
                        // If you don't want click extra trigger collapse, you can prevent this:
                        event.stopPropagation();
                      }}
                    />
                  </div>
                }
                key="3"
              >
                <Project />
              </Panel>
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
