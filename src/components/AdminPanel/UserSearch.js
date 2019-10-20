import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Statistic, Row, Col, Button, Cascader,Input } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/userSearchAction';
class UserSearch extends Component{
    state ={
        userId:'',
        username:'',
        name:''
    }

    handleChange = (e)=> {
        console.log('value',e.target.value);
        
        this.setState({
            userId: e.target.value
        },()=>{
            this.props.searchBId({id:this.state.userId}) 
        })
    }

    handleEmailChange = (e)=> {
        console.log('value',e.target.value);
        
        this.setState({
            username: e.target.value
        },()=>{
            this.props.searchBMail({email:this.state.username}) 
        });
    }
     
    handleNameChange = (e)=> {
        console.log('value',e.target.value);
        this.setState({
            name: e.target.value
        },()=>{
            this.props.searchBName({name:this.state.name}) 
        });
    }

    render(){
        const {userById, userByMail, userByName} = this.props.search;
        console.log('props',this.props.search);
        
        return (
                <React.Fragment>
               <Row className='user-statistics'>
               <Col md={12} className='statistic'>
            <Input placeholder="ادخل رقم المستخدم" onChange={this.handleChange}/>
           {userById!== '' && (
            <Row className='user-information'>
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
               <Col md={12} className='statistic'>
                    <Input placeholder="ادخل البريد الالكتروني للمستخدم" onChange={this.handleEmailChange}/>
                         {userByMail !=='' && (
                            <Row className='user-information'>
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
                            ) }
                </Col>
               </Row>
               <Row className='user-statistics'>
                <Col md={12} className='statistic'>
                <Input placeholder="ادخل اسم المستخدم" onChange={this.handleNameChange}/>
                     {userByName !=='' ?
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