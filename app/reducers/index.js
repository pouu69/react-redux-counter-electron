import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux'

const initState = [
	{
		name : '한식A',
		value : 0
	},
	{ 
		name : '한식B',
		value : 0
	},
	{
		name : '한식C',
		value : 0
	},
	{
		name : '양식A',
		value : 0
	},
	{ 
		name : '양식B',
		value : 0
	},
	{
		name : '양식C',
		value : 0
	},
	{
		name : '일품A',
		value : 0
	},
	{ 
		name : '일품B',
		value : 0
	},
	{
		name : '일품C',
		value : 0
	}
];

function tasks(state, action){
	if(action.type === types.INCREMENT){
		return Object.assign([], state, {value : state[action.index].value++});
	}else if(action.type === types.DECREMENT){
		if(state[action.index].value <= 0){
			return Object.assign([], state, {value : 0});
		}else{
			return Object.assign([], state, {value : state[action.index].value--});
		}
	}
}


function counters(state = initState, action){
	switch(action.type){
		case types.INCREMENT:
		case types.DECREMENT:
			return tasks(state,action);
		case types.RESET:
			return state.map( (obj, i) => Object.assign([], obj, {value : 0}));
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	counters
});


export default rootReducer;