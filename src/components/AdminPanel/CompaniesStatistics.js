import React, {Component} from 'react';
import {connect} from 'react-redux';
import {companyBCountry, companyBMajor, companyBCityMajor} from '../../store/actions/companyActions';
import { Statistic, Row, Col, Cascader, Card } from 'antd';
import baseRequest from '../../_core';
class CompaniesStatistics extends Component{
    state={
        value:'',
        countries:[],
        cities:[],
        majors:[],
        specialMajor: [],
        companiesInfo: {}
    }
    componentDidMount(){
        baseRequest.get('/getcountry')
        .then((countries)=>{
            const countryFormate= countries.map((elm)=>{
                return {
                    id: elm._id,
                    value: elm.countryName,
                    label: elm.countryName
                }
            })
            this.setState({
                countries:countryFormate
            })
        });

        baseRequest.get('/get/majors')
        .then((majors)=>{
            const majorsValues = majors.map((value)=>{
                return {
                    id: value._id,
                    value: value.majorName,
                    label:  value.majorName,
                    key: value.key
                }
            })
            this.setState({majors: majorsValues})
        });

        baseRequest.get('/get/companiesInfo')
        .then((companiesInfo)=>{
            console.log('companiesInfo',companiesInfo);
            
            this.setState({
                companiesInfo
            })
        });
        
    }
    cityChange =(value,selectedOptions)=>{
        this.setState ({
            city: selectedOptions[0]
        },()=>{
        const {companyBCountry} =this.props;
            companyBCountry({
                city_id: this.state.city.id,
                country_id: this.state.country.id
            })
        });
    }
    cityAndMajorChange =(value,selectedOptions)=>{
        this.setState ({
            city: selectedOptions[0]
        },()=>{
        const {companyBCityMajor} =this.props;
        companyBCityMajor({
                city_id: this.state.city.id,
                country_id: this.state.country.id,
                major_id: this.state.major.id,
                smajor_id: this.state.sub_major.id
            })
        });
    }
    
    countryChange =(value,selectedOptions)=>{
        this.setState ({
            country: selectedOptions[0]
        },()=>{
            baseRequest.get('/getcity')
            .then((cityData)=>{
            const cityFormate=cityData.map((elm)=>{
                    return {
                        id: elm._id,
                        value: elm.cityName,
                        label: elm.cityName
                    }
                })
                this.setState({
                    cities:cityFormate
                })
            }) 
        }); 
    }
    majorChange =(value,selectedOptions)=>{
        this.setState ({
            major: selectedOptions[0]
        }, ()=>{
            const majorId = this.state.major.id;
         baseRequest.get(`/get/spMajors?id=${majorId}`)
        .then((specialMajor)=>{
            const specialMajorRefactor= specialMajor.map((elm)=>{
                return {
                    id: elm._id,
                    value: elm.majorName,
                    label: elm.majorName,
                };
            });
            this.setState({
                    specialMajor:  specialMajorRefactor
                 });
            });
        }); 
    }

    specialMajorChange =(value,selectedOptions)=>{
        this.setState ({
            sub_major: selectedOptions[0]
        },()=>{
            const {companyBMajor}= this.props;
            companyBMajor({
                sector: this.state.major.id,
                s_major: this.state.sub_major ? this.state.sub_major.id : undefined
            }) 
        })
};

    render(){
        const {companyBCountry, companyBMajor, companyBCityMajor} = this.props.companyStatistics;
        const {companiesInfo} = this.state;
        
        return (
            <React.Fragment>
                 <Row className='user-percentages'>
                        <Col md ={5}>
                            <div className='container' >
                            <Card className='card-body' title="عدد الشركات" bordered={false} >
                                <p className='card-text'>{companiesInfo ? companiesInfo.NumberOfCompanies: ''}</p>
                            </Card>
                            </div>
                        </Col>
                        <Col md ={5}>
                            <div className='container' >
                            <Card className='card-body' title=" عدد الشركات التي لها معلومات" bordered={false} >
                            <p className='card-text'>{companiesInfo ? companiesInfo.NumberOfCompaniesWithInfo: ''}</p>                               
                            </Card>
                            </div>
                        </Col>
                        <Col md ={5}>
                            <div className='container'>
                            <Card className='card-body' title="عدد الوظائف" bordered={false}>
                            <p className='card-text'>{companiesInfo ? companiesInfo.NumberOfJobs: ''}</p>                               
                            </Card>
                            </div>
                        </Col>
                        <Col md ={5}>
                            <div className='container'>
                            <Card className='card-body' title="عدد المشاريع" bordered={false}>
                            <p className='card-text'>{companiesInfo ? companiesInfo.NumberOfProjects: ''}</p>                                                               
                            </Card>
                            </div>
                        </Col>   
                </Row>
                <Row className='user-statistics'> 
                <Col md={6} className='statistic'>
                    <Cascader className='dropdown-menu' options={this.state.countries} onChange={this.countryChange} placeholder="اختر الدولة" />
                    <Cascader className='dropdown-menu' options={this.state.cities} onChange={this.cityChange} placeholder="اختر المدينة" />
                    <Statistic title="عدد الشركات بناءً على المدينة" value={companyBCountry!==null ? companyBCountry.result : '' } />
                </Col>
                <Col md={6} className='statistic'>
                    <Cascader className='dropdown-menu' options={this.state.majors} onChange={this.majorChange} placeholder=" التخصص العام" />
                    <Cascader className='dropdown-menu' options={this.state.specialMajor} onChange={this.specialMajorChange} placeholder="الفرع الخاص" />
                    <Statistic title="عدد الشركات بناءً على التخصص" value={companyBMajor!==null ? companyBMajor.result : '' } />
                </Col>
                <Col md={10} className='statistic'>
                    <div className='company-details'>
                    <Cascader className='dropdown-menu' options={this.state.majors} onChange={this.majorChange} placeholder=" التخصص العام" />
                    <Cascader className='dropdown-menu' options={this.state.specialMajor} onChange={this.specialMajorChange} placeholder="الفرع الخاص" />
                    </div>
                    <div className='company-details'>
                    <Cascader className='dropdown-menu' options={this.state.countries} onChange={this.countryChange} placeholder="الدولة" />
                    <Cascader className='dropdown-menu' options={this.state.cities} onChange={this.cityAndMajorChange} placeholder="المدينة" />
                    </div>
                    <Statistic title="عدد الشركات بناءً على الدولة والتخصص" value={companyBCityMajor!==null ? companyBCityMajor.result : '' } />
                </Col>
                </Row>
                <Row className='user-statistics'>
                <Col md={6} className='statistic'>
                    <Cascader className='dropdown-menu' options={this.state.countries} onChange={this.countryChange} placeholder="اختر الشركة"  />

                    <Statistic title="عدد المشاريع" value={11} />
                    <Statistic title="عدد عروض الأعمال" value={5} />

                </Col>
                </Row>
               
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        companyStatistics : state.companyStatistics
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        companyBCountry:(params)=> dispatch(companyBCountry(params)),
        companyBMajor:(params)=> dispatch(companyBMajor(params)),
        companyBCityMajor: (params) => dispatch(companyBCityMajor(params))


    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(CompaniesStatistics);
