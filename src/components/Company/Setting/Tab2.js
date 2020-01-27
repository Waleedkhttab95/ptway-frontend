import React from 'react';
import { Modal, Input } from 'antd';

const array = [1, 2, 3, 4, 5, 6, 7, 8];
class Tab2 extends React.Component {
  state = {
    subaccountModal: false
  };
  addSubAccount = () => {
    this.setState({
      subaccountModal: true
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="sub-accounts">
          <div>
            <div style={{ position: 'relative' }}>
              <input
                className="jobs-search search-mob"
                placeholder="بحث"
                style={{ marginRight: '0' }}
              />
              <i
                className="fa fa-search jobs-search-icon"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div>
            <span className="filter-title">الترتيب :</span>
            <input placeholder="الاحدث" className="filter-input" />
          </div>
          <button className="sub-account-btn" onClick={this.addSubAccount}>
            أضف حساب فرعي
          </button>
          <Modal
            visible={this.state.subaccountModal}
            closable={false}
            footer={false}
          >
            <div className="new-sub-acc">
              <h3>أضف حساب فرعي جديد</h3>
              <p>
                ستقوم بإضافة جميع المعلومات للحساب الفرعي الجديد وإضافته للقائمة
              </p>
              <div className="new-sub-form">
                <div>
                  <label>الاسم الأول</label>
                  <Input />
                  <label>البريد الالكتروني</label>
                  <Input />
                  <label>كلمة المرور</label>
                  <Input />
                  <label>المسمى الوظيفي</label>
                  <Input />
                </div>
                <div>
                  <label>الاسم الأول</label>
                  <Input />
                  <label>البريد الالكتروني</label>
                  <Input />
                  <label>كلمة المرور</label>
                  <Input />
                  <label>المسمى الوظيفي</label>
                  <Input />
                </div>
              </div>
              <button
                className="sub-account-btn"
                onClick={() => this.setState({ subaccountModal: false })}
              >
                أضف حساب فرعي
              </button>
            </div>
          </Modal>
        </div>
        <div className="sub-accounts-header">
          <h3>الرقم التسلسلي</h3>
          <h3>الاسم الأول والأخير</h3>
          <h3>المنصب الوظيفي</h3>
          <h3>البريد الالكتروني</h3>
          <h3>كلمة المرور</h3>
          <h3></h3>
        </div>
        {array.map((elm, index) => {
          return (
            <div
              className={index % 2 == 0 ? 'sub-account' : 'sub-account-odd'}
              key={elm}
            >
              <h3>0231</h3>
              <h3>هاشم القحطاني</h3>
              <h3>مدير مبيعات</h3>
              <h3>hashem@ptway.com</h3>
              <h3>********</h3>
              <h3>...</h3>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Tab2;
