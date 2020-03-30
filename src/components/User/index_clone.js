import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { userInformation } from "../../store/actions/user/HomeActions";
import { connect } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const HomeClone = ({ user, userInformation }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function() {
      await userInformation();
      setLoading(false);
    })();
  }, []);

  const { userInfo: info } = user;
  return loading ? (
    <div className="text-center py-5">
        <Spinner style={{width:'3rem',height:'3rem'}}/>
    </div>
  ) : (
    <div className="px-lg-5">
           <Container fluid className="px-lg-5 py-5">
      <Row>
        <Col lg={4} xl={3}>
          <div className="mb-5">
            <div className="pt-5 pb-3 mb-3 bg-white rounded-lg shadow-sm">
              <div className="text-center">
                <i
                  className="fa fa-user-circle mb-2"
                  aria-hidden="true"
                  style={{ fontSize: "60px" }}
                ></i>

                <p className="font-weight-bold">{info.fullName}</p>
              </div>
              <div className="details-user-info text-right">
                <ul className="list-unstyled text-muted">
                  <li className="mb-2">
                    <i className="fa fa-envelope ml-2" aria-hidden="true"></i>
                    {info.email}
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-mobile ml-2" aria-hidden="true"></i>
                    0581970172
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-user ml-2" aria-hidden="true"></i>
                    male
                  </li>
                  <li className="mb-2">
                    <i className="fa fa-map-marker ml-2" aria-hidden="true"></i>
                    Riyadh,KSA
                  </li>
                </ul>
              </div>
            </div>
            <div
              dir="ltr"
              className="pt-5 pb-3 text-center bg-white rounded-lg shadow-sm"
            >
              <CircularProgressbar
                value={info.profileComplete}
                text={info.profileComplete ? `${info.profileComplete}%` : ""}
                styles={{
                  path: {
                    stroke: `rgba(62, 152, 199, ${info.profileComplete / 100})`,
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5s ease 0s",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center"
                  },
                  trail: {
                    stroke: "#d6d6d6",
                    strokeLinecap: "butt",
                    transform: "rotate(0.25turn)",
                    transformOrigin: "center center"
                  },
                  text: {
                    fill: "#009ad0",
                    fontSize: "16px",
                    dominantBaseline: "middle",
                    textAnchor: "middle"
                  },
                  background: {
                    fill: "#3e98c7"
                  }
                }}
              />
              <p className="u-p-title">نسبة اكتمال الحساب</p>
            </div>
                
                <Link className="btn shadow-sm btn-lg btn-info w-100 mt-3" to="/user/profile/update">
                تعديل معلومات الحساب
                </Link>
          </div>
        </Col>
        <Col lg={8} xl={9}>
          <div className="mb-3 text-center h5">
          <Row>
                <Col md={4}>
                    <div className="bg-info text-white py-5 px-3 rounded-lg shadow-sm mb-lg-0 mb-3">
                    <div>عدد ساعات العمل</div>
                  <div >{info.work_Hours}</div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="bg-info  text-white py-5 px-3 rounded-lg shadow-sm mb-lg-0 mb-3">
                    <div>وظائف تقدمت عليها</div>
                  <div >{info.aplled_jobs}</div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="bg-info  text-white py-5 px-3 rounded-lg shadow-sm">
                    <div>عدد مشاهدات الحساب</div>
                  <div>{info.profile_views}</div>
                    </div>
                </Col>
            </Row>
          </div>
          <div className="py-4 px-lg-5 px-4 bg-white text-right bg-white rounded-lg shadow-sm">
            <div className="h5">
              <i
                className="fa fa-exclamation-circle ml-1"
                aria-hidden="true"
              ></i>
              نبذة عامة
            </div>
            <hr />
            <div className="text-right text-muted mb-5">{info.about}</div>

            <div className="h5">
              <i
                className="fa fa-exclamation-circle ml-1"
                aria-hidden="true"
              ></i>
              الدراسات والشهادات
            </div>
            <hr />
            <div className="text-right text-muted mb-5">
              <p>
                <span className="font-weight-bold ml-2">التخصص العام :</span>
                {info.public_Major}
              </p>
              <p>
                <span className="font-weight-bold ml-2">التخصص العام :</span>
                {info.spicifc_Major || "غير محدد"}
              </p>
            </div>
            <div className="h5">
              <i
                className="fa fa-exclamation-circle ml-1"
                aria-hidden="true"
              ></i>
              اللغات
            </div>
            <hr />

            <div className="text-right text-muted mb-5">
              {Array.isArray(info.languages) &&
                info.languages.map(lang => (
                  <div key={lang} className="badge badge-info ml-2">
                    {lang}
                  </div>
                ))}
            </div>

            <div className="h5">
              <i
                className="fa fa-exclamation-circle ml-1"
                aria-hidden="true"
              ></i>
              المهارات العامة
            </div>
            <hr />
            <div className="text-right text-muted mb-5">
              {Array.isArray(info.skills) &&
                info.skills.map(skill => (
                  <div key={skill} className="badge badge-info ml-2">
                    {skill}
                  </div>
                ))}
            </div>

            <div className="h5">
              <i
                className="fa fa-exclamation-circle ml-1"
                aria-hidden="true"
              ></i>
              المهارات الشخصية
            </div>
            <hr />
            <div className="text-right text-muted mb-5">
              {Array.isArray(info.personal_Skills) &&
                info.personal_Skills.map(skill => (
                  <div key={skill} className="badge badge-info ml-2">
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

const mapStateToProps = ({ userS }) => {
  return {
    user: userS
  };
};
const mapDispatchToProps = dispatch => {
  return {
    userInformation: () => dispatch(userInformation())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeClone);
