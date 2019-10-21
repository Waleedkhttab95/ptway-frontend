import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col,Input } from 'antd';
import {searchById, searchByEmail, searchByName} from '../../store/actions/adminSearch/companySearchAction';
import search from '../../images/search-icon.svg';
import _ from 'lodash';

class CompanySearch extends Component{
    state ={
        companyId:'',
        companyMail:'',
        companyName:''
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
           {companyById &&
           ( <Row className='user-information'>
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
                         {companyByMail &&
                           ( <Row className='user-information'>
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
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CompanySearch);