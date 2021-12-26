import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED,
} from "./constants"

export const setSearchField = value => ({
	type: CHANGE_SEARCH_FIELD,
	payload: value,
})

export const requestRobots = dispatch => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(robots => dispatch({type: REQUEST_ROBOTS_SUCCESS, robots}))
		.catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, error}));
}