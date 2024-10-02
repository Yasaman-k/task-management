import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../../utils/api'; // Adjust the path
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectAllTasks } from './taskSlice';


const TasksList: React.FC = () => {

    const tasks = useSelector(selectAllTasks)
    const dispatch = useDispatch<any>();


    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const renderedTasks = tasks?.results.map((task: TaskType) => (
        <li key={task.id} className='flex justify-between items-center border p-2 '>
            <div className=''>
                <p> {task.completed ? 'Completed' : 'Incomplete'}</p>
                <div>
                    <p> {task.title} </p>
                    <p>{task.description}</p>
                </div>
            </div>
            <div className='flex-shrink-0 space-x-2' >
                <button className='bg-yellow-700'>edit</button>
                <button className='bg-red-700'>delete</button>
            </div>


        </li>
    ))




    return (
        <section>
            <h3>Task List</h3>
            <ul className='space-y-3'>
                {renderedTasks}
            </ul>
        </section>
    );
};

export default TasksList;
