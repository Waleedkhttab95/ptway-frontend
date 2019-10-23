import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col,Input, Modal } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/companySearchAction';
import {deleteCompany} from '../../store/actions/adminCRUD/companyCRUDAction';
import search from '../../images/search-icon.svg';
import delete_icon from '../../images/delete.svg';
import update_icon from '../../images/edit.svg';
import _ from 'lodash';

class CompanySearch extends Component{
    state ={
        companyId:'',
        companyMail:'',
        companyName:'',
        visible: false
    }

    handleChange = (e)=> {
        this.setState({
            companyId: e.target.value
        },()=>{
            this.props.companyBId({id: this.state.companyId}) 
        })
    }

    handleEmailChange = (e)=> {
        this.setState({
            companyMail: e.target.value
        },()=>{
            this.props.companyBMail({email: this.state.companyMail}) 
        });
    }
     
    handleNameChange = (e)=> {
        this.setState({
            companyName: e.target.value
        },()=>{
            this.props.companyBName({name: this.state.companyName}) 
        });
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = async id => {
       await this.props.deleteCompany({id});
        this.setState({
          companyId:'',
          companyMail:'',
          companyName:'',
          visible: false
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }; 

    render(){
        const {companyById, companyByMail, companyByName} = this.props.search;
        return (
                <React.Fragment>
               <Row className='company-search'>
               <Col md={16}>
                   <div className='input-container statistic'>
            <Input placeholder="ادخل رقم الشركة" onChange={this.handleChange}/>
            <img className ='search' src={search}/>
                   </div>
           {companyById && this.state.companyId !== '' &&
           ( <Row className='user-information'>
                <div className='du-images'>
                    <img className='delete-user' src={delete_icon} alt='' onClick={this.showModal}/>
                    <img className='update-user' src={update_icon} alt='' />
                    <Modal
                        title="هل أنت متأكد؟"
                        visible={this.state.visible}
                        onOk={()=>{this.handleOk(companyById._id)}}
                        onCancel={this.handleCancel}
                        >
                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                    </Modal>
                </div>
                <div className='user-name'>
                   <span> اسم الشركة :</span> 
                   <span>{companyById.companyName }</span> 
                </div>

                <div className='user-name'>
                    <span>البريد الالكتروني للشركة :</span>
                    <span>{ companyById.email}</span>

                </div>
                <div className='user-name'>
                    <span>التخصص :</span>
                    <span>{ companyById.CompanySpecialist}</span>

                </div>
                <div className='user-name'>
                    <span>القطاع :</span>
                    <span>{ companyById.sector}</span>

                </div>
            </Row>
            ) }
        </Col>
               </Row>
               <Row className='company-search'>
               <Col md={16} >
                   <div className='input-container statistic'>
                    <Input placeholder="ادخل البريد الالكتروني للشركة" onChange={this.handleEmailChange}/>
                    <img className ='search' src={search}/>
                   </div>
                         {companyByMail && this.state.companyMail !== '' &&
                           ( <Row className='user-information'>
                                <div className='du-images'>
                                    <img className='delete-user' src={delete_icon} alt='' onClick={this.showModal}/>
                                    <img className='update-user' src={update_icon} alt='' />
                                    <Modal
                                        title="هل أنت متأكد؟"
                                        visible={this.state.visible}
                                        onOk={()=>{this.handleOk(companyByMail._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                                </div>
                                <div className='user-name'>
                                <span> اسم الشركة :</span> 
                                <span>{companyByMail.companyName}</span> 
                                </div>
                                <div className='user-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{companyByMail.email}</span>

                                </div>
                            </Row>
                             )}
                </Col>
               </Row>
               <Row className='company-search'>
                <Col md={16} >
                    <div className='input-container statistic'>
                <Input placeholder="ادخل اسم الشركة" onChange={this.handleNameChange}/>
                <img className ='search' src={search}/>

                    </div>
                     {(_.isArray(companyByName) || _.isObject(companyByName) )&& this.state.companyName !=='' ?
                        companyByName.map((elm)=>{
                            return( 
                                <Row className='user-information'>
                                    <div className='du-images'>
                                    <img className='delete-user' src={delete_icon} alt='' onClick={this.showModal}/>
                                    <img className='update-user' src={update_icon} alt='' />
                                    <Modal
                                        title="هل أنت متأكد؟"
                                        visible={this.state.visible}
                                        onOk={()=>{this.handleOk(elm._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                                </div>
                                <div className='user-name'>
                                <span> اسم الشركة :</span> 
                            <span>
                                    {elm.companyName} </span>
                                    
                                    </div>
                                    <div className='user-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{elm.email}</span>
                
                                </div>
                                <div className='user-name'>
                                    <span>التخصص :</span>
                                    <span>{elm.CompanySpecialist}</span>
                
                                </div>
                                <div className='user-name'>
                                    <span> القطاع:</span>
                                    <span>{elm.sector}</span>
                
                                </div>
                                </Row>
                         )
                    }) 
                        
                :null
                }
            </Col>
                
               </Row>

              
                </React.Fragment>

        )
    }
}

const mapStateToProps = ({search})=>{
    return {
        search
    }
};

const mapDispatchToProps = dispatch=> {
    return {
      companyBId: (params)=> dispatch(searchById(params)),
      companyBMail: (params)=> dispatch(searchByEmail(params)),
      companyBName: (params)=> dispatch(searchByName(params)),
      deleteCompany :(params) => dispatch(deleteCompany(params))
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CompanySearch);