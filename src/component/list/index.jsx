
import { useDispatch } from 'react-redux';
import { changeInput } from '../../redux/inputValueSlice';
import { changeTodoInput, deletTodo } from '../../redux/todoSlice';
import './style.scss';

function List({list}){
    const dispatch = useDispatch()
    
    return (
        <li className={`todo-list-text ${list.tagClass}`} >
                <input 
                    type="checkbox" 
                    defaultChecked={list.check} 
                    onClick={(e)=>{
                        dispatch(changeTodoInput(list,e.target.checked))
                    }}
                    id={list.text+list.id}
                />
                <label htmlFor={list.text+list.id}>
                    <span className={`todo-text ${list.check?'delet-text':''}`}>
                        {list.text}
                    </span>
                    <p>
                        <span className='icon-pencil-solid todo-icon'onClick={()=>{
                        dispatch(deletTodo(list))
                        dispatch(changeInput(list))
                        }}/>
                        <span className='icon-trash-solid todo-icon' onClick={()=>{
                            dispatch(deletTodo(list))
                        }}/>
                    </p>
                </label>
        </li>
    )
}

export default List;