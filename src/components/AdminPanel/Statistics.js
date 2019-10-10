import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import baseRequest from '../../_core/index'
import {ageStatistic, cityStatistic, majorStatistic} from '../../store/actions/statisticsAction'
import { Statistic, Col, Button, Cascader,Input } from 'antd';

class AgeStatistics extends React.Component{
    state={
        value:'',
        countries:[],
        cities:[],
    }
    componentDidMount(){
        baseRequest.get('/getcountry ')
        .then((countryData)=>{
             baseRequest.get('/getcity')
            .then((cityData)=>{
                console.log('cityData',cityData);
            const cityFormate=cityData.map((elm)=>{
                    return {
                        id: elm._id,
                        value: elm.cityName,
                        label: elm.cityName
                    }
                })
                const countryFormate= countryData.map((elm)=>{
                    return {
                        id: elm._id,
                        value: elm.countryName,
                        label: elm.countryName
                    }
                })
                this.setState({
                    countries:countryFormate,
                    cities:cityFormate
                })
            })
        })
        
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
            this.setState({majors:majorsValues})
        })
    }

    getCountryCityData =()=>{
        const {city}= this.props;
        city({
            city_id: this.state.city.id,
            country_id: this.state.country.id
        })
    }

    getMajorAndSubMajorData =()=>{
        const {major}= this.props;
        major({
            major: this.state.major.id,
            spMajor: this.state.sub_major ? this.state.sub_major.id : undefined
        })
    }

    cityChange =(value,selectedOptions)=>{
    this.setState ({
        city: selectedOptions[0]
    });
    }

    countryChange =(value,selectedOptions)=>{
    this.setState ({
        country: selectedOptions[0]
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
majorSpecialChange =(value,selectedOptions)=>{
        this.setState ({
            sub_major: selectedOptions[0]
        })
};
    onChange =(event)=>{
        this.setState({
            value: event.value
        })
    };
    ageCount = ()=>{
        const {age} = this.props;
         age(this.state.value); 
    
    };

    render(){  
        const {age,city, major} = this.props.statistics; 
        return (
            <React.Fragment> 
       <Col md={6} className='statistic'>
            <Input placeholder="ادخل عمر المستخدم" onChange={this.onChange}/>
            <Button onClick={this.ageCount} className='submit'> اضغط</Button>
              <Statistic title="عدد المستخدمين بناءً على العمر" value={age!=='' ? age : ''} />
         </Col>
        <Col md={6} className='statistic'>
          <Cascader className='dropdown-menu' options={this.state.countries} onChange={this.countryChange} placeholder="اختر الدولة" />
          <Cascader className='dropdown-menu' options={this.state.cities} onChange={this.cityChange} placeholder="اختر المدينة" />
          <Button onClick={this.getCountryCityData} className='submit'> اضغط</Button>
          <Statistic title="عدد المستخدمين بناءً على المدينة" value={city !== undefined ? city.users : ''} />
        </Col>
        <Col md={6} className='statistic'>
          <Cascader className='dropdown-menu' options={this.state.majors} onChange={this.majorChange} placeholder=" التخصص العام" />
          <Cascader className='dropdown-menu' options={this.state.specialMajor} onChange={this.majorSpecialChange} placeholder="الفرع الخاص" />
          <Button onClick={this.getMajorAndSubMajorData} className='submit'> اضغط</Button>
          <Statistic title="عدد المستخدمين بناءً على التخصص" value={major !== undefined ? major.users : ''} />
        </Col>
        </React.Fragment>
            )
        
}
}

const mapStateToProps = (state)=>{
    return {
        statistics : state.statistics
    }
}
const mapDispatchToProps = dispatch=> {
    return {
        age: (params)=> {
        return dispatch(ageStatistic(params))
      },
      city: (params)=> dispatch(cityStatistic(params)),
      major:(params)=> dispatch(majorStatistic(params))

    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(AgeStatistics);