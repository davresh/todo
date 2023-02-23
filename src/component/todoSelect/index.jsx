
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

function TodoSelect(){
    const dispatch = useDispatch()
    const box = useSelector(state => state.todo);
    const check = box.filter(el => el.check).length
    
    return (
        <div className='todo-select'>
          <span>{check}/{box.length}</span>
          <button onClick={()=>{
            dispatch({
              type:'deleteChecked',
            })
            
          }}>Remove checked</button>
        </div>
    )
}
export default TodoSelect;