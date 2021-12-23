import { CHANGE_SEARCH_FIELD, UPDATE_ROBOTS } from "./constants"

export const setSearchField = value => ({
	type: CHANGE_SEARCH_FIELD,
	payload: value,
})

export const setRobots = value => ({
	type: UPDATE_ROBOTS,
	payload: value,
})