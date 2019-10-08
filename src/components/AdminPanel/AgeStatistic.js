import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import baseRequest from '../../_core/index'
import {ageStatistic, cityStatistic} from '../../store/actions/statisticsAction'
import { Statistic, Col, Button, Cascader  } from 'antd';

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
    }
    getCountryCityData =()=>{
        const {city}= this.props;
        city({
            city_id: this.state.city.id,
            country_id: this.state.country.id
        })
    }
cityChange =(value,selectedOptions)=>{
    console.log('city',selectedOptions[0]);
    this.setState ({
        city: selectedOptions[0]
    })
    
}
countryChange =(value,selectedOptions)=>{
    console.log('country',selectedOptions);
    this.setState ({
        country: selectedOptions[0]
    })
    
}
    onChange =(event)=>{
        this.setState({
            value: event.value
        })
    }
    ageCount = ()=>{
        const {age} = this.props;
         age(this.state.value); 
    
    }

    render(){
        
        const {age,city} = this.props.statistics; 
        return (
            <div> 
       <Col md={6} className='statistic'>
           <label> ادخل عمر المستخدم</label>
            <input type="text" onChange={this.onChange}/>
            <Button onClick={this.ageCount}> اضغط</Button>
              <Statistic title="عدد المستخدمين بناءً على العمر" value={age!=='' ? age : ''} />
         </Col>
          <Col md={6} className='statistic'>
          <Cascader options={this.state.countries} onChange={this.countryChange} placeholder="اختر الدولة" />
          <Cascader options={this.state.cities} onChange={this.cityChange} placeholder="اختر المدينة" />
          <Button onClick={this.getCountryCityData}> اضغط</Button>
          <Statistic title="عدد المستخدمين بناءً على المدينة" value={city !== undefined ? city.users : ''} />
        </Col>
        </div>
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
      city: (params)=> dispatch(cityStatistic(params))

    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(AgeStatistics);