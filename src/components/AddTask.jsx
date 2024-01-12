import {useState} from "react";

const AddTask = ({addTask}) => {
    const [inputAddTaskValue, setInputAddTaskValue] = useState('');

    const onChangeInputAddTask = (e) => {
        setInputAddTaskValue(e.target.value);
    };

    const onSubmitAddTask = (e) => {
        e.preventDefault();

        if (inputAddTaskValue.trim() === '') {
            alert('Please enter a task name');
            return;
        }

        setInputAddTaskValue('');

        const newTask = {
            name: inputAddTaskValue,
            completed: false
        };

        addTask(newTask);
    };

    return (
        <form className={'todo-form'} onSubmit={onSubmitAddTask}>
            <input type={'text'} placeholder={'Add a new task...'}
                value={inputAddTaskValue}
                onChange={onChangeInputAddTask}
            />
            <button type={'submit'}>Add Task</button>
        </form>
    );
};

export default AddTask;