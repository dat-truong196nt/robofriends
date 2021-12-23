import { CHANGE_SEARCH_FIELD, UPDATE_ROBOTS } from "./constants";

export const onSearchChange = (state = {searchField: ''}, action = {type: '', payload: ''}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return {searchField: action.payload};
		default:
			return {searchField: state.searchField,};
	}
}

export const onRobotRespond = (state = {robots: []}, action = {type: '', payload: ''}) => {
	switch (action.type) {
		case UPDATE_ROBOTS:
			return {robots: action.payload, searchField: state.searchField};
		default:
			return {
				searchField: state.searchField,
				robots: state.robots,
			};
	}
}