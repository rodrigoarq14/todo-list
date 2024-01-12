import '../assets/css/index.css';
import {useState} from "react";
import AddTask from "./AddTask.jsx";

const Task = ({name, index, isCompleted, onDeleteTask, onCompletedTask}) => {
    const onClickDeleteTask = () => {
        onDeleteTask(index);
    };

    const onCheckBoxCompleted = () => {
        onCompletedTask(index);
    };

    return (
        <li>
            <input type="checkbox" checked={isCompleted} onChange={onCheckBoxCompleted}/>
            <label>{name}</label>
            <button className={'btn-delete'} onClick={onClickDeleteTask}>Remove</button>
        </li>
    );
};

const TodoListApp = () => {
    const [tasks, setTasks] = useState([]);
    const [tasksCompleted, setTasksCompleted] = useState(0);

    const onClickClearAll = () => {
        setTasks([]);
        setTasksCompleted(0);
    };

    const onAddTask = (newTask) => {
        setTasks(tasks => [...tasks, newTask]);
    };

    const onDeleteTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        updateTasksCompleted(updatedTasks);
    };

    const onCompletedTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
        updateTasksCompleted(updatedTasks);
    }

    const updateTasksCompleted = (updatedTasks) => {
        const completedCount = updatedTasks.filter(task => task.completed).length;
        setTasksCompleted(completedCount);
    }

    return (
        <div className={'todo-container'}>
            <h1>To-Do List App</h1>
            <AddTask addTask={onAddTask} />
            <ul>
                {
                    tasks.map(( task, index) => {
                        return <Task
                            key={index}
                            index={index}
                            name={task.name}
                            isCompleted={task.completed}
                            onDeleteTask={onDeleteTask}
                            onCompletedTask={onCompletedTask}
                        />
                    })
                }
            </ul>
            <div className={'todo-footer'}>
                <div>
                    Tasks Completed: <span>{tasksCompleted}</span>/<span>{tasks.length}</span>
                </div>
                <button className={'btn-clear'} onClick={onClickClearAll}>Clear All</button>
            </div>
        </div>
    );
};

export default TodoListApp;