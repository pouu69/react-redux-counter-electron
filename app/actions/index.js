import * as types from '../constants/ActionTypes';

export function incrementCnt(index){
	return {
		type : types.INCREMENT,
		index : index
	}
}

export function decrementCnt(index){
	return{
		type : types.DECREMENT,
		index : index
	}
}

export function resetCnt(){
	return {
		type : types.RESET
	}
}