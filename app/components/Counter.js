import React, {Component, PropTypes} from 'react';
import  {connect} from 'react-redux';

import {incrementCnt, decrementCnt, resetCnt} from '../actions'; 
import CounterBox from './CounterBox';

class Counter extends Component{
	constructor(){
		super();
	}

	reset(){

	}
	render(){
		const {dispatch, counters} = this.props;
		const style ={ 
			rootDiv : { height : "100vh" },
			resetBtn : {width:'100%', fontSize:'20px', height:'8%', marginTop:'10px'}
		};
		return(
			<div style={style.rootDiv}>
				{counters.map( (counter,i) => 
						<CounterBox 
							key={i}
							index={i}
							name={counter.name}
							value={counter.value}
							onIncrement={index => dispatch(incrementCnt(index))}
							onDecrement={index => dispatch(decrementCnt(index))}
						/>)
				}
				<button style={style.resetBtn} onClick={()=>dispatch(resetCnt())}>
				리셋
				</button>
			</div>
		);
	}
}


function mapStateToProps(state){
	return{
		counters : state.counters
	};
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;