import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col,Input, Modal } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/companySearchAction';
import {deleteCompany, updateCompany, confirmCompany, blockCompany} from '../../store/actions/adminCRUD/companyCRUDAction';
import search from '../../images/search-icon.svg';
import delete_icon from '../../images/delete.svg';
import update_icon from '../../images/edit.svg';
import confirm_icon from '../../images/confirmation.svg';
import block_icon from '../../images/block.svg';
import _ from 'lodash';

class CompanySearch extends Component{
    state ={
        companyId:'',
        companyMail:'',
        companyName:'',
        visible: false,
        editVisible: false,
        editedCompany: '',
      confirmVisible: false,
      blockVisible: false
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
    
      showEditModal = () => {
        this.setState({
          editVisible: true,
        });
      };
     
      handleOk = async id => {
       await this.props.deleteCompany({id});
        this.setState({
          companyId:'',
          companyMail:'',
          companyName:'',
          visible: false
        },()=>{
            // Modal.confirm();
        });
      };

    handleEditOk = async (id,type) =>{
        await this.props.updateCompany({
            id,
            value: this.state.editedCompany,
            type,
        })
    this.setState({
        companyId:'',
        companyMail:'',
        companyName:'',
        editVisible: false
    })
    }
    
    handleCancel = e => {
    console.log(e);
    this.setState({
        visible: false,
        editVisible: false,
      confirmVisible: false,
      blockVisible: false
    });
    }; 

    handleInputChange = (e)=>{
        this.setState({
          editedCompany: e.target.value,
        })
    }
    showConfirmationModal = ()=>{
        this.setState({
            confirmVisible: true,
          });
      }
      handleConfirmOk = async id=>{
        console.log('e',id);
        await this.props.confirmCompany({id});
        this.setState({
            companyId:'',
            companyMail:'',
            companyName:'',
            confirmVisible: false
        });
        
      }
      showBlockModal =()=>{
        this.setState({
            blockVisible: true,
          });
      };
      handleBlockOk = async id =>{
        await this.props.blockCompany({id});
        this.setState({
            companyId:'',
            companyMail:'',
            companyName:'',
            blockVisible: false
        });
      }  

    render(){
        const {companyById, companyByMail, companyByName} = this.props.search;
        return (
                <React.Fragment>
               <Row className='company-search'>
               <Col md={16}>
                   <div className='input-container search-container'>
            <Input placeholder="ادخل رقم الشركة" onChange={this.handleChange}/>
            <img className ='search' src={search} alt=''/>
                   </div>
           {companyById && this.state.companyId !== '' &&
           ( <Row className='company-information'>
                <div className='du-images'>
                    <img className='delete-company' src={delete_icon} alt='' onClick={this.showModal}/>
                    <Modal
                        title="هل أنت متأكد؟"
                        visible={this.state.visible}
                        onOk={()=>{this.handleOk(companyById._id)}}
                        onCancel={this.handleCancel}
                        >
                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                    </Modal>
                    <img className='update-company' src={update_icon} alt='' />
                    <img className= 'confirmation'src={confirm_icon} alt='' onClick={this.showConfirmationModal}/>
                        <Modal
                            title="رسالة تأكيد"
                            visible={this.state.confirmVisible}
                            onOk={()=>{this.handleConfirmOk(companyById._id)}}
                            onCancel={this.handleCancel}
                            >
                            <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                        </Modal>
                    <img className= 'block' src={block_icon} alt='' onClick={this.showBlockModal}/>
                        <Modal
                            title="رسالة تأكيد"
                            visible={this.state.blockVisible}
                            onOk={()=>{this.handleBlockOk(companyById._id)}}
                            onCancel={this.handleCancel}
                            >
                            <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                        </Modal>            
                                
                   
                </div>
                <div className='company-name'>
                   <span> اسم الشركة :</span> 
                   <span>{companyById.companyName }</span> 
                </div>

                <div className='company-name'>
                    <span>البريد الالكتروني للشركة :</span>
                    <span>{ companyById.email}</span>

                </div>
                <div className='company-name'>
                    <span>التخصص :</span>
                    <span>{ companyById.CompanySpecialist}</span>

                </div>
                <div className='company-name'>
                    <span>القطاع :</span>
                    <span>{ companyById.sector}</span>

                </div>
            </Row>
            ) }
        </Col>
               </Row>
               <Row className='company-search'>
               <Col md={16} >
                   <div className='input-container search-container'>
                    <Input placeholder="ادخل البريد الالكتروني للشركة" onChange={this.handleEmailChange}/>
                    <img className ='search' src={search} alt=''/>
                   </div>
                         {companyByMail && this.state.companyMail !== '' &&
                           ( <Row className='company-information'>
                                <div className='du-images'>
                                    <img className='delete-company' src={delete_icon} alt='' onClick={this.showModal}/>
                                    <Modal
                                        title="هل أنت متأكد؟"
                                        visible={this.state.visible}
                                        onOk={()=>{this.handleOk(companyByMail._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                                    <img className='update-company' src={update_icon} alt='' onClick={this.showEditModal} />
                                    <Modal
                                        title="تعديل البريد الالكتروني للشركة"
                                        visible={this.state.editVisible}
                                        onOk={()=>{this.handleEditOk(companyByMail._id,'email')}}
                                        onCancel={this.handleCancel}
                                        >
                                        <Input placeholder="ادخل البريد الالكتروني " onChange={this.handleInputChange}/>
                                    </Modal>
                                    <img className= 'confirmation'src={confirm_icon} alt='' onClick={this.showConfirmationModal}/>
                                <Modal
                                    title="رسالة تأكيد"
                                    visible={this.state.confirmVisible}
                                    onOk={()=>{this.handleConfirmOk(companyByMail._id)}}
                                    onCancel={this.handleCancel}
                                    >
                                    <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                                </Modal>
                                <img className= 'block' src={block_icon} alt='' onClick={this.showBlockModal}/>
                                    <Modal
                                        title="رسالة تأكيد"
                                        visible={this.state.blockVisible}
                                        onOk={()=>{this.handleBlockOk(companyByMail._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                                    </Modal>
                                </div>
                                <div className='company-name'>
                                <span> اسم الشركة :</span> 
                                <span>{companyByMail.companyName}</span> 
                                </div>
                                <div className='company-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{companyByMail.email}</span>

                                </div>
                            </Row>
                             )}
                </Col>
               </Row>
               <Row className='company-search'>
                <Col md={16} >
                    <div className='input-container search-container'>
                <Input placeholder="ادخل اسم الشركة" onChange={this.handleNameChange}/>
                <img className ='search' src={search} alt=''/>

                    </div>
                     {(_.isArray(companyByName) || _.isObject(companyByName) )&& this.state.companyName !=='' ?
                        companyByName.map((elm)=>{
                            return( 
                                <Row className='company-information'>
                                    <div className='du-images'>
                                    <img className='delete-company' src={delete_icon} alt='' onClick={this.showModal}/>
                                    <Modal
                                        title="هل أنت متأكد؟"
                                        visible={this.state.visible}
                                        onOk={()=>{this.handleOk(elm._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                                    <img className='update-company' src={update_icon} alt='' onClick={this.showEditModal}/>
                                    <Modal
                                        title="تعديل اسم الشركة"
                                        visible={this.state.editVisible}
                                        onOk={()=>{this.handleEditOk(elm._id,'companyName')}}
                                        onCancel={this.handleCancel}
                                        >
                                        <Input placeholder="ادخل الاسم " onChange={this.handleInputChange}/>
                                    </Modal>
                                    <img className= 'confirmation'src={confirm_icon} alt='' onClick={this.showConfirmationModal}/>
                                <Modal
                                    title="رسالة تأكيد"
                                    visible={this.state.confirmVisible}
                                    onOk={()=>{this.handleConfirmOk(elm._id)}}
                                    onCancel={this.handleCancel}
                                    >
                                    <p>هل ترغب حقاً في تفعيل الحساب؟</p>
                                </Modal>
                                <img className= 'block' src={block_icon} alt='' onClick={this.showBlockModal}/>
                                    <Modal
                                        title="رسالة تأكيد"
                                        visible={this.state.blockVisible}
                                        onOk={()=>{this.handleBlockOk(elm._id)}}
                                        onCancel={this.handleCancel}
                                        >
                                        <p>هل ترغب حقاً في حظر هذا الحساب؟</p>
                                    </Modal>   
                                </div>
                                <div className='company-name'>
                                <span> اسم الشركة :</span> 
                            <span>
                                    {elm.companyName} </span>
                                    
                                    </div>
                                    <div className='company-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{elm.email}</span>
                
                                </div>
                                <div className='company-name'>
                                    <span>التخصص :</span>
                                    <span>{elm.CompanySpecialist}</span>
                
                                </div>
                                <div className='company-name'>
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
      deleteCompany :(params) => dispatch(deleteCompany(params)),
      updateCompany :(params) => dispatch(updateCompany(params)),
      confirmCompany: (params) => dispatch(confirmCompany(params)),
      blockCompany: (params) => dispatch(blockCompany(params)),


    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CompanySearch);