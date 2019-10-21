import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Statistic, Row, Col, Button, Cascader,Input } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/userSearchAction';
import search from '../../images/search-icon.svg';
import _ from 'lodash';
class UserSearch extends Component{
    state ={
        userId:'',
        username:'',
        name:''
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

    render(){
        const {userById, userByMail, userByName} = this.props.search;

        return (
                <React.Fragment>
               <Row className='user-statistics'>
               <Col md={12}>
                   <div className='input-container statistic'>
            <Input placeholder="ادخل رقم المستخدم" onChange={this.handleChange}/>
            <img className ='search' src={search}/>
                   </div>
           {userById &&
           ( <Row className='user-information'>
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
               <Row className='user-statistics'>
               <Col md={12} >
                   <div className='input-container statistic'>
                    <Input placeholder="ادخل البريد الالكتروني للمستخدم" onChange={this.handleEmailChange}/>
                    <img className ='search' src={search}/>
                   </div>
                         {userByMail &&
                           ( <Row className='user-information'>
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
               <Row className='user-statistics'>
                <Col md={12} >
                    <div className='input-container statistic'>
                <Input placeholder="ادخل اسم المستخدم" onChange={this.handleNameChange}/>
                <img className ='search' src={search}/>

                    </div>
                     {(_.isArray(userByName) || _.isObject(userByName) )&& this.state.name !=='' ?
                        userByName.map((elm)=>{
                            return( 
                                <Row className='user-information'>
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

const mapStateToProps = ({search})=>{
    return {
        search
    }
};

const mapDispatchToProps = dispatch=> {
    return {
        searchBId: (params)=> {
        return dispatch(searchById(params))
      },
      searchBMail: (params)=> {
        return dispatch(searchByEmail(params))
      },
      searchBName: (params)=> {
        return dispatch(searchByName(params))
      },

    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(UserSearch);