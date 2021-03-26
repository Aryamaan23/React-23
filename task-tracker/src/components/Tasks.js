// eslint-disable-next-line
import Task from './Task'

const Tasks = ({tasks,onDelete,onToggle}) => {
    // eslint-disable-next-line
    
    return (
       
        <>
        {tasks.map((task)=> (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
            
        </>
    )
}

export default Tasks
