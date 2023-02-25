
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoChecked } from '../../redux/todoSlice';
import './style.scss';

function TodoSelect(){
    const dispatch = useDispatch()
    const box = useSelector(state => state.todo);
    const check = box.filter(el => el.check).length
    
    return (
        <div className='todo-select'>
          <span>{check}/{box.length}</span>
          <button onClick={()=>{
            dispatch(deleteTodoChecked())
          }}>Remove checked</button>
        </div>
    )
}
export default TodoSelect;