
import TodoForm from '../../component/todoForm';
import TodoList from '../../component/todoList';
import TodoSelect from '../../component/todoSelect';
import './style.scss';

function Todo(){
    return (
        <div className='todo-box'>
            <TodoForm/>
            <TodoList/>
            <TodoSelect/>
        </div>
    )
}

export default Todo;