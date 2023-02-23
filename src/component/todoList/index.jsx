import { useSelector } from 'react-redux'
import List from '../list';
import './style.scss';

function TodoList(){
   const box = useSelector(state => state.todo)
    localStorage.setItem('arr',JSON.stringify(box))
    return (
        <ul className='todo-list'>
            {box.map((todo,id) => <List key={todo.id} list={todo}/>)}
        </ul>
    )
}

export default TodoList;