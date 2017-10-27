import { combineReducers } from 'redux'
import { ADD_OKR } from '../actions/actions'

function okr(state, action) {
   switch (action.type) {
	
      case ADD_OKR:
         return {
            id: action.id,
            text: action.text,
         }
			
      default:
      return state
   }
}

function okrs(state = [], action) {
   switch (action.type) {
	
      case ADD_OKR:
         return [
            ...state,
            okr(undefined, action)
         ]
			
      default:
      return state
   }
}

const okrApp = combineReducers({
   okrs
})

export default okrApp