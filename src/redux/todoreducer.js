import { AddTodo } from "./type"
import { delteTodo } from "./type"
import { compTodo } from "./type"
import { edit} from "./type"
const initialState ={
    toodos:[]
}

export const   addTodoREducer = (state=initialState, action) => {
  switch (action.type) {
    case AddTodo:
        console.log(action.payload)
    return {
        ...state,
        toodos:[...state.toodos,(action.payload)]}

    case delteTodo:
         state.toodos[action.payload-1].status=true;
      return{
        ...state,
          toodos:[...state.toodos]}
    case compTodo:
         state.toodos[action.payload-1].completed=true;
      return{
        ...state,
          toodos:[...state.toodos]}
    case edit:
         state.toodos[action.payload.idd-1].item=action.payload.textforedit;
      return{
        ...state,
          toodos:[...state.toodos]}

    default: return state
  }
}

