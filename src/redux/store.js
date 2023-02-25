import { combineReducers, legacy_createStore as createStore } from 'redux';
import { inputInitialState, inputValReducers } from './inputValueSlice';
import { todoInitialState, todoReducers } from './todoSlice';


const store = createStore(combineReducers({
    inpVal:inputValReducers,
    todo:todoReducers,
}),{
    inpVal:inputInitialState,
    todo:todoInitialState
})

export default store;