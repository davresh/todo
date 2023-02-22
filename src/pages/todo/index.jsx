
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from '../../component/todoList';
import './style.scss';

function Todo(){
    const textRef = useRef()
    const dispatch = useDispatch()
    const box = useSelector(state => state.todo)
    return (
        <div className='todo-box'>  
            <form className='todoForm'>
                <input type="text" placeholder='Add text' ref={textRef}/>
                <button onClick={(e)=>{
                    e.preventDefault()
                    if(textRef.current.value !== ''){
                        
                        textRef.current.classList.remove('erorr');
                        dispatch({
                            type:'add',
                            payload:{
                                id:box.length+1,
                                text:textRef.current.value,
                                check:false,
                            }
                        })
                        textRef.current.value = '';
                    }else{
                        textRef.current.classList.add('erorr');
                    }
                }}>Add</button>
            </form>
            <TodoList/>
        </div>
    )
}

export default Todo;