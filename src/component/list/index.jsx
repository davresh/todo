
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.scss';

function List({list}){
    const dispatch = useDispatch()
    
    return (
        <li className={`todo-list-text ${list.tagClass}`}>
            <h3>
                <input 
                    type="checkbox" 
                    defaultChecked={list.check} 
                    onClick={(e)=>{
                        dispatch({
                            type:'checked',
                            payload:{
                                ...list,
                                check:e.target.checked
                            },
                        })
                    }}
                />
                {list.text}
                </h3>
                <p>
                <span className='icon-pencil-solid'onClick={()=>{
                    dispatch({
                        type:'delet',
                        payload:{
                            id:list.id,
                        }
                    })
                    dispatch({
                        type:'changeText',
                        payload:{
                            inpVal:list.text
                        }
                    })
                }}/>
                <span className='icon-trash-solid' onClick={()=>{
                    dispatch({
                        type:'delet',
                        payload:{
                            id:list.id,
                        }
                    })
                }}/>
                </p>

        </li>
    )
}

export default List;