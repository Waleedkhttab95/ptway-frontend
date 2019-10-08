import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import {ageStatistic} from '../../store/actions/statisticsAction'
import { Statistic, Col, Button } from 'antd';

class AgeStatistics extends React.Component{
    state={
        value:''
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
        
        const {statistics:{data}} = this.props; 
        return (
       <Col md={6} className='statistic'>
           <label> ادخل عمر المستخدم</label>
            <input type="text" onChange={this.onChange}/>
            <Button onClick={this.ageCount}> اضغط</Button>
              <Statistic title="عدد المستخدمين بناءً على العمر" value={data!=='' ? data : ''} />
         </Col>
 
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
      }
    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(AgeStatistics);