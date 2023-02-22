import { legacy_createStore as createStore } from 'redux';

const store = createStore((state,action)=>{
    switch(action.type){
        case 'delet':
            return {
                ...state,
                todo:state.todo.filter(list => list.id !== action.payload.id)
            };
            case 'add':
                return {
                    ...state,
                    todo:[
                        ...state.todo,
                        {
                            id:action.payload.id,
                            text:action.payload.text,
                            check:action.payload.check,
                        },
                    ]
                };
        default:
            return state;
    }
},{
    todo:[
        {
            id:1,
            text:'HTML',
            check:false,
        },
        {
            id:2,
            text:'CSS',
            check:false,
        },
        {
            id:3,
            text:'JAVASCRIPT',
            check:false,
        },
    ]
})

export default store;