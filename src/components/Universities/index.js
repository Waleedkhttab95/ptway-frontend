import React,{Component} from 'react';
import { connect } from "react-redux";
import {getUniversity} from '../../store/actions/getUniversity'
class Home extends Component{

    componentDidMount (){
        const {getUniversity} = this.props;
        getUniversity('5c87a833d307d54674192da7')
    }
    render(){
        console.log('props',this.props)
        return(
            <div>
                Welcome to Hell!
            </div>
        )
    }
        
    
}

const stateToProps = state=>{
    console.log('state',state.data);
    
    return {
      universities: state.data
    }
}
const dispatchToProps =dispatch =>{
    return {
      getUniversity: params => dispatch(getUniversity(params))
    }
}
export default connect(stateToProps,dispatchToProps)(Home);