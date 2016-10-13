import React, {Component, PropTypes} from 'react';

export default class ConterBox extends Component{
	constructor(){
		super();
		console.log('counter box');
		this.incrementCnt = this.incrementCnt.bind(this);
		this.decrementCnt = this.decrementCnt.bind(this);

	}

	incrementCnt(){
		this.props.onIncrement(this.props.index);
	}

	decrementCnt(){
		this.props.onDecrement(this.props.index);
	}

	render(){
		const { name, index, value, onIncrement, onDecrement } = this.props;
		const style = {

			div : {
					float : 'left',
					width: '33%',
					height:'30%',
					textAlign: "center",
					fontSize : '25px'		
				},
			btn : {
				fontSize: '18px',
				marginRight:'5px'
			},
			pCnt : {
				fontSize: '50px',
				margin : '10px 0px 0px 0px',
			}
		}
		
		return(
			<div style={style.div}>
				<p>{name}</p>
				{' '}
				<button style={style.btn} onClick={this.incrementCnt}>
				+
				</button>
				<button style={style.btn} onClick={this.decrementCnt}>
				-
				</button>
				<p style={style.pCnt}>{value}</p>
			</div>
		);
	}
}