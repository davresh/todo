const addTodo = 'add';
const checked = 'checked';
const deleteTodo = 'delet';
const todoChecked = 'deleteChecked';
const localTodoValue = JSON.parse(localStorage.getItem('arr'));
export const todoInitialState =  localTodoValue??[
    {
        id:0,
        text:'HTML',
        check:false,
        tagClass:'',
    },
    {
        id:1,
        text:'CSS',
        check:false,
        tagClass:'',
    },
    {
        id:2,
        text:'JAVASCRIPT',
        check:false,
        tagClass:'',
    },
];

export function todoReducers(state=todoInitialState,action){
    switch(action.type){
        case 'delet':
            return state.filter(list => {
                return list.id !== action.payload.id;
            });
        case 'add':
            return [
                ...state.map((el,id)=>{
                    el.id = id
                    el.tagClass = ''
                    return el
                }),
                action.payload
            ];
        case 'checked':
            return state.map(el => {
                if(el.id == action.payload.id){
                    return action.payload
                }
                return el
            });
        case 'deleteChecked':
            return state.filter(el => {
                return el.check !== true
            })
        default:
            return state;
    };
};

export function addTodoList(block,refTag){
    return {
        type:addTodo,
        payload:{
            id:block.length,
            text:refTag.current.value,
            check:false,
            tagClass:'todo-anim'
        }
    }
};

export function changeTodoInput(todo,val){
    return {
        type:checked,
        payload:{
            ...todo,
            check:val
        },
    }
};

export function deletTodo(todo){
    return {
        type:deleteTodo,
        payload:{
            id:todo.id,
        }
    }
};

export function deleteTodoChecked(){
    return {
        type:todoChecked,
    }
};