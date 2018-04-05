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

  export const editFormUpdated = (value) => {
    return {
      type: 'EDIT_FORM_UPDATED',
      payload: value
    }
  }

  export const saveEditForm = (value) => {
    return {
      type: 'SAVE_EDIT_FORM',
      payload: value
    }
  }
}
