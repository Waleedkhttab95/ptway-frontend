import React from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import baseRequest from '../../_core/index';
import {weeklyGrowth} from '../../store/actions/statisticsAction'
import {Row, Col, Card} from 'antd';
import { HorizontalBar } from 'react-chartjs-2';


class Percentage extends React.Component{
    state ={
        allUsers: ''
    }
    componentDidMount (){
        const {growthPercentage} =this.props;
        growthPercentage();

      baseRequest.get('/get/allUsers_Genders_CV')
      .then((allUsers)=>{
          this.setState({
              allUsers
          });
      })
    }
render(){  
const {growth} = this.props.statistics;
const {NumberOfUsers, NumberOfMaleUsers, NumberOfFemaleUsers, NumberOfUsersWithCV} = this.state.allUsers;

const  dataInfo = {
    labels: ['الأسبوع الأول', 'الأسبوع الثاني', 'الأسبوع الثالث', 'الأسبوع الرابع', 'الأسبوع الخامس'],
    datasets: [
        {
        label: 'معدل النمو أسبوعياً',
        backgroundColor: ' #9dceff',
        borderColor: '#40a9ff',
        borderWidth: 2,
        hoverBackgroundColor: '#76bbff',
        hoverBorderColor: '#3b9dff',
        data: growth
        }
    ]
};
return (
    <React.Fragment> 
        <Row className='user-percentages'>
            <Col md ={5}>
                <div className='container' >
                <Card className='card-body' title="عدد المستخدمين" bordered={false}>
                    <p className='card-text'>{this.state.allUsers !==null ? NumberOfUsers : ''}</p>
                </Card>
                </div>
            </Col>
            <Col md ={5}>
                <div className='container' >
                <Card className='card-body' title=" عدد المستخدمين الذكور" bordered={false} >
                <p className='card-text'>{this.state.allUsers !==null ? NumberOfMaleUsers : ''}</p>                               
                </Card>
                </div>
            </Col>
            <Col md ={5}>
                <div className='container'>
                <Card className='card-body' title="عدد المستخدمين الاناث" bordered={false}>
                <p className='card-text'>{this.state.allUsers !==null ? NumberOfFemaleUsers : ''}</p>                               
                </Card>
                </div>
            </Col>
            <Col md ={5}>
                <div className='container'>
                <Card className='card-body' title=" المستخدمين الذين لديهم سيرة ذاتية" bordered={false}>
                <p className='card-text'>{this.state.allUsers !==null ? NumberOfUsersWithCV : ''}</p>                                                               
                </Card>
                </div>
            </Col>
                
        </Row>
        
        <Row >
            <Col md={10} className='weekly-growth'>
            <h3 className='card-text'>معدل النمو اسبوعيا</h3>
            <HorizontalBar data={dataInfo} />
            </Col>
        </Row>
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
        growthPercentage:()=> dispatch(weeklyGrowth())

    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(Percentage);