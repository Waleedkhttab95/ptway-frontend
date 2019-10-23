import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Modal, Row, Col,Input } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/userSearchAction';
import {deleteUser,updateUser} from '../../store/actions/adminCRUD/userCRUDAction';
import search from '../../images/search-icon.svg';
import delete_icon from '../../images/delete.svg';
import update_icon from '../../images/edit.svg';
import _ from 'lodash';
class UserSearch extends Component{
    state ={
        userId:'',
        username:'',
        name:'',
        visible: false,
      editVisible: false,
      editedUser: '',
    }

    handleChange = (e)=> {
        this.setState({
            userId: e.target.value
        },()=>{
            this.props.searchBId({id:this.state.userId}) 
        })
    }

    handleEmailChange = (e)=> {
        this.setState({
            username: e.target.value
        },()=>{
            this.props.searchBMail({email:this.state.username})
        });
    }
     
    handleNameChange = (e)=> {
        this.setState({
            name: e.target.value
        },()=>{
            this.props.searchBName({name:this.state.name}) 
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
   await this.props.deleteUser({id});
    this.setState({
        userId:'',
        username:'',
        name:'',
      visible: false
    });
  };
  
  handleEditOk = async (id,type) =>{
      await this.props.updateUser({
          id,
          value: this.state.editedUser,
          type,
      })
    this.setState({
      editedUser:'',
      editVisible: false
    })
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  handleInputChange = (e)=>{
      this.setState({
        editedUser: e.target.value,
      })
  }

    render(){
        const {userById, userByMail, userByName} = this.props.search;

        return (
                <React.Fragment>
               <Row className='user-search'>
               <Col md={16}>
                   <div className='input-container statistic'>
            <Input placeholder="ادخل رقم المستخدم" onChange={this.handleChange}/>
            <img className ='search' src={search}/>
                   </div>
           {userById && this.state.userId !== '' &&
           ( <Row className='user-information'>
               <div className='du-images'>
                    <img className='delete-user' src={delete_icon} alt='' onClick={this.showModal}/>
                    <Modal
                        title="هل أنت متأكد؟"
                        visible={this.state.visible}
                        onOk={()=>{this.handleOk(userById._id)}}
                        onCancel={this.handleCancel}
                        >
                        <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                    </Modal>
                    <img className='update-user' src={update_icon} alt=''  />
                   
                </div>
                <div className='user-name'>
                   <span> اسم المستخدم :</span> 
                   <span>{ 
                       userById ? userById.firstName + " " + userById.lastName
                     : null 
                     }</span> 
                </div>

                <div className='user-name'>
                    <span>البريد الالكتروني :</span>
                    <span>{userById? userById.email: ''}</span>

                </div>
            </Row>
            ) }
        </Col>
               </Row>
               <Row className='user-search'>
               <Col md={16} >
                   <div className='input-container statistic'>
                    <Input placeholder="ادخل البريد الالكتروني للمستخدم" onChange={this.handleEmailChange}/>
                    <img className ='search' src={search}/>
                   </div>
                         {userByMail && this.state.username !== '' && this.state.editedUser !=='' &&
                           ( <Row className='user-information'>
                               <div className='du-images'>
                               <img className='delete-user' src={delete_icon} alt='' type="primary" onClick={this.showModal} />
                               <Modal
                                    title="هل أنت متأكد"
                                    visible={this.state.visible}
                                    onOk={()=>{this.handleOk(userByMail._id)}}
                                    onCancel={this.handleCancel}
                                    >
                                    <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                               <img className='update-user' src={update_icon} alt='' onClick={this.showEditModal} />
                               <Modal
                                    title="تعديل البريد الالكتروني للمستخدم"
                                    visible={this.state.editVisible}
                                    onOk={()=>{this.handleEditOk(userByMail._id,'email')}}
                                    onCancel={this.handleCancel}
                                    >
                                <Input placeholder="ادخل البريد الالكتروني " onChange={this.handleInputChange}/>
                                </Modal>
                               </div>
                                <div className='user-name'>
                                <span> اسم المستخدم :</span> 
                                <span>{ 
                                    userByMail ? userByMail.firstName + " " +userByMail.lastName
                                    : null 
                                    }</span> 
                                </div>

                                <div className='user-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{userByMail? userByMail.email: ''}</span>

                                </div>
                            </Row>
                             )}
                </Col>
               </Row>
               <Row className='user-search'>
                <Col md={16} >
                    <div className='input-container statistic'>
                <Input placeholder="ادخل اسم المستخدم" onChange={this.handleNameChange}/>
                <img className ='search' src={search}/>

                    </div>
                     {(_.isArray(userByName) || _.isObject(userByName) )&& this.state.name !==''&& this.state.editedUser !=='' ?
                        userByName.map((elm)=>{
                            return( 
                                <Row className='user-information'>
                                <div className='du-images'>
                                    <img className='delete-user' src={delete_icon} alt='' onClick={this.showModal} />
                                    <Modal
                                    title="هل أنت متأكد"
                                    visible={this.state.visible}
                                    onOk={()=>{this.handleOk(elm._id)}}
                                    onCancel={this.handleCancel}
                                    >
                                    <p>هل ترغب حقاً في حذف هذا العنصر؟</p>
                                    </Modal>
                                    <img className='update-user' src={update_icon} alt='' onClick={this.showEditModal}/>
                                    <Modal
                                    title="تعديل اسم المستخدم"
                                    visible={this.state.editVisible}
                                    onOk={()=>{this.handleEditOk(elm._id,'firstName')}}
                                    onCancel={this.handleCancel}
                                    >
                                <Input placeholder="ادخل الاسم " onChange={this.handleInputChange}/>
                                </Modal>
                                    
                                 </div>
                                <div className='user-name'>
                                <span> اسم المستخدم :</span> 
                            <span>
                                    {elm.firstName + " " + elm.lastName} </span>
                                    
                                    </div>
                                    <div className='user-name'>
                                    <span>البريد الالكتروني :</span>
                                    <span>{elm.email}</span>
                
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

const mapStateToProps = ({search,adminSer})=>{
    return {
        search,
        adminSer
    }
};

const mapDispatchToProps = dispatch=> {
    return {
      searchBId: (params)=> dispatch(searchById(params)),
      searchBMail: (params)=> dispatch(searchByEmail(params)),
      searchBName: (params)=> dispatch(searchByName(params)),
      deleteUser :(params) => dispatch(deleteUser(params)),
      updateUser :(params) => dispatch(updateUser(params)),

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserSearch);