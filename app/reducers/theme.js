import { CHANGE_PRIMARY_COLOR } from '../actions/theme'

const initalState = {
  primaryColor: "#4F6D7A"
}

export default (state=initalState, action) => {
  switch(action.type){
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.color,
      }
    default: return state
  }
}
