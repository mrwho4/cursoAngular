import { Action } from "@ngrx/store";

// interfaces 
export interface ActionUserLocated extends Action {
	payload: Coordinates
}

// actions creators

export const userLocated = (coords) => {
	return {
		type: 'USER_LOCATED',
		payload: coords
	}
}

export const userNotLocated = () => {
	return {
		type: 'USER_NOT_LOCATED'
	}
}

export const sucursalDeselected = () => {
	return {
		type: 'SUCURSAL_SELECTED'
	}
}

export const sucursalSelected = (i) => {
	return {
		type: 'SUCURSAL_SELECTED', 
		payload: i
	}
}
