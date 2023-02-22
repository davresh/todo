
import { useDispatch } from 'react-redux';
import './style.scss';

function List({list}){
    const dispatch = useDispatch()
    return (
        <li className='todo-list-text'>
            <h3>{list.text}</h3>
            <span className='icon-trash-solid' onClick={()=>{
                dispatch({
                    type:'delet',
                    payload:{
                        id:list.id,
                    }
                })
            }}/>
        </li>
    )
}

export default List;