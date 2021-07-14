import { AddTodo } from "./type"
import { delteTodo } from "./type"
import { compTodo } from "./type"
import { edit} from "./type"
export const addTodos = (obj) => {
  return {
    type: AddTodo,
    payload: obj
  }
}

export const deletetodos = (obj) => {
  return {
    type: delteTodo,
    payload: obj
  }
}
export const compTodos = (obj) => {
  return {
    type: compTodo,
    payload: obj
  }
}

export const editTodos = (obj) => {
  return {
    type: edit,
    payload: obj
  }
}