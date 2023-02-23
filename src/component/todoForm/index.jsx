import './style.scss';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoForm(){
    const dispatch = useDispatch()
    const box = useSelector(state => state.todo)
    const inpValue = useSelector(state => state.inpVal)
    const textRef = useRef()
    useEffect(()=>{
        console.log('text');
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
                        dispatch({
                            type:'add',
                            payload:{
                                id:box.length,
                                text:textRef.current.value,
                                check:false,
                                tagClass:'todo-anim'
                            }
                        })
                        console.log(box.length);
                        dispatch({
                            type:'deletInp',
                        })
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