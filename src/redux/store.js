
//import { reducer } from "./reducer";

import { createStore } from 'redux'
import {addTodoREducer} from './todoreducer'



const store=createStore(addTodoREducer)
export default store;



