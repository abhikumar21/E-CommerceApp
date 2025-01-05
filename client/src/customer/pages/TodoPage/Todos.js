import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, removeTodo } from '../../../features/todo/todoSlice';

const Todos = () => {
  const todos = useSelector((state)=>state.todos.todos);
  // console.log(todos);
    // const [todos, setTodos] = useState([
    //     "Learn HTML",
    //     "Learn CSS",
    //     "Learn Javascript"
    // ]);
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTask(e.target.value);
        // console.log(task);
    }

    const handleAddTodo = (e) => {
      e.preventDefault();
      dispatch(addTodo(task));
        // setTodos([...todos, task]);
        setTask("");
    }

    const handleDelete = (id) => {
      dispatch(removeTodo(id));
    }


  return (
    <div  className='todos py-10'>
      <div className="head text-xl font-bold py-5">TODOS</div>
      <div className="containr">
        {/* <div className="task">
            <div className="text">Read Harry Potter</div>
        </div> */}

        {
            todos.map((item, idx)=> {
                return(
                    <div key={idx} className="task bg-slate-500 my-2 flex">
                        <div key={item.id} className="text mx-5">{item.text}</div>
                        <button onClick={()=>handleDelete(item.id)} className="remove bg-red-600 px-2 py-1 rounded-md">Delete</button>
                    </div>
                )
            })
        }

      <form className="input flex">
        <input 
        onChange={handleChange}
        value={task}
        type="text" 
        className='border border-black rounded-md px-2'
        />
        <button 
        onClick={handleAddTodo}
        className='bg-blue-500 px-2 py-1 rounded-md'>
            Add
        </button>
      </form>
      </div>
    </div>
  )
}

export default Todos
