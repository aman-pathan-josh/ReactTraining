import { useState } from "react";
import DisplayToDo from "./DisplayToDo";
import {TasksList} from './types';
import './style.css'

const ToDo: React.FC = ()=>{
    const [input,setInput] = useState<string>("");
    
    const [tasks_list,setTasksList] = useState<Array<TasksList>>([]);

    const handleSubmit = ()=>{
        setTasksList([...tasks_list,{"id":Date.now(),"task": `${input}`, "status": false}]);
        setInput("")
    }

    const handleDelete = (ele_id:number)=>{
        setTasksList((tasks)=>{
            return tasks.filter((task)=>{return task.id !== ele_id})
        })        
    }

    const handleComplete = (ele_id:number)=>{
        setTasksList(tasks_list.map((task)=>{
            if (task.id === ele_id){
                return {...task,"status":!task.status};
            }
            else{
                return task;
            }
        }))
    }
    return (
    <div className="container">
        <div className="todo_container">
            <h1>ToDo App</h1>
            <div className="input_div">
                <input type="text" className="input_box" placeholder="add your tasks..." onChange={(event)=>{setInput(event.target.value)}} value={input}/>
                <button className="add-btn" onClick={handleSubmit}>Add</button>
            </div>
            <div className="tasks">
                <DisplayToDo tasks={tasks_list} handleDelete = {handleDelete} handleComplete={handleComplete}/>
            </div>
        </div>
    </div>
    )
}

export default ToDo;
