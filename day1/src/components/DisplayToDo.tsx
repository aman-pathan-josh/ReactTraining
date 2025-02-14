import './style.css';
import {TaskProps} from './types';

const DisplayToDo: React.FC<TaskProps> = ({tasks,handleDelete,handleComplete})=>{
    return (
        tasks.map((task)=>{
            return (
                <div className="task_item">
                    <p className={task.status?"task_name strikethrough":"task_name"} key={task.id}>{task.task}</p>
                    <div className='btn-container'>
                        <button className="complete-btn" onClick={()=>handleComplete(task.id)}>Mark as Done</button>
                        <button className="delete-btn" onClick={()=>handleDelete(task.id)}>Delete</button>
                    </div>
                </div>
            )
        })
    );
}
export default DisplayToDo;
