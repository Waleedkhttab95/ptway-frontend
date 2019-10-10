import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import './index.scss';
import {weeklyGrowth} from '../../store/actions/statisticsAction'
import {Col} from 'antd';
import { HorizontalBar } from 'react-chartjs-2';


class Percentage extends React.Component{

    componentDidMount (){
        const {growthPercentage} =this.props;
           growthPercentage();
    }
    render(){  
       const {growth} = this.props.statistics;
        
      const  dataInfo = {
            labels: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس'],
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
                <Col md={15}>
                    <HorizontalBar data={dataInfo} />
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
        growthPercentage:()=> dispatch(weeklyGrowth())

    }
  }
export default connect (mapStateToProps,mapDispatchToProps)(Percentage);