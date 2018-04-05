import { Action } from "@ngrx/store";
import { ActionUserLocated } from "../actions/actions";

export interface UserLocationStatesSlice {
  located: boolean,
  coords: Coordinates
}

export interface AppStore {
  userLocation: any,  // {located: boolean, coords: Coordinates},
  sucursalSelected: number
}

export const userLocation =
  (state: UserLocationStatesSlice = { located: false, coords: null }, action: ActionUserLocated) => {
    switch (action.type) {
      case 'USER_LOCATED':
        return {
          located: true,
          coords: {
            latitude: action.payload.latitude,
            longitude: action.payload.longitude
          }
        };

      case 'USER_NOT_LOCATED':
        return {
          located: false
        };
      default:
        return state;
    }

  }

export const sucursalSelected = (state: number = null, action: Action) => {
  return state;
}

  export const editForm = (state, action: Action) => {
    switch (action.type) {
      case 'EDIT_FORM_UPDATED':
          //return {... action.payload}
    
      default:
        return state;
    }
  }

  // export const 

// export const locationHistory = 
// 	(state:Coordinates[] = [], action: Action) => {
// 		switch (action.type) {
// 			case 'USER_LOCATED' : 
// 			return [... state, action.payload]
// 		}
// 		default:
// 			return state;
// 	}
// }
