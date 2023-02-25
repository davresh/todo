import './style.scss';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList } from '../../redux/todoSlice';
import { deleteValue } from '../../redux/inputValueSlice';

function TodoForm(){
    const dispatch = useDispatch()
    const box = useSelector(state => state.todo)
    const inpValue = useSelector(state => state.inpVal)
    const textRef = useRef()
    useEffect(()=>{
        textRef.current.value = inpValue
    },[inpValue])
    return (
        <>
            <form className='todoForm'>
                <input 
                    type="text" 
                    placeholder='Add text' 
                    ref={textRef}
                    />
                <button onClick={(e)=>{
                    e.preventDefault()
                    if(textRef.current.value !== ''){
                        textRef.current.classList.remove('erorr');
                        dispatch(addTodoList(box,textRef))
                        dispatch(deleteValue())
                        textRef.current.value = '';
                    }else{
                        textRef.current.classList.add('erorr');
                    }
                }}>Add</button>
            </form>
        </>
    )
}

export default TodoForm;