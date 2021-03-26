// eslint-disable-next-line
import Task from './Task'

const Tasks = ({tasks}) => {
    // eslint-disable-next-line
    
    return (
       
        <>
        {tasks.map((task)=> (<Task key={task.id} task={task} />))}
            
        </>
    )
}

export default Tasks
