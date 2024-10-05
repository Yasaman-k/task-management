import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { apiDeleteTask, fetchTasks, selectAllTasks, stateEditTask } from './tasksSlice';
import { AppDispatch } from '../../app/store'; // Import the AppDispatch type
import { useNavigate } from 'react-router-dom';

const TasksList: React.FC = () => {
    const navigate = useNavigate();
    const tasks = useSelector(selectAllTasks)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const deleteTask = (task: TaskType) => {
        try {
            dispatch(apiDeleteTask(task))
        } catch (error) {
            console.error('Failed to delete the post', error)
        }
    }

    const editCheckedTask = (e: any, task: TaskType) => {
        const body = Object.assign({ completed: e.target.checked })

        dispatch(
            stateEditTask(
                {
                    id: task.id,
                    task: body
                }
            )
        )
    }


    const renderedTasks = tasks?.tasks.map((task: TaskType) => (
        <li key={task.id} className='flex flex-col-reverse md:flex-row border p-2 '>
            <div className='flex  space-x-4 items-center w-full md:w-[calc(100%-9rem)] '>
                <input className='w-10' type='checkbox' onChange={(e) => editCheckedTask(e, task)} defaultChecked={task.completed} />

                <div className='w-full md:w-[calc(100%-10rem)] ' style={{ overflowWrap: 'anywhere' }} >
                    <p style={{ overflowWrap: 'anywhere' }} > {task.title} </p>
                    <p style={{ overflowWrap: 'anywhere' }} > {task.description}</p>
                </div>

            </div>
            <div className='flex justify-between self-center w-[9rem]'>
                <button className='bg-yellow-700 w-[4rem]' onClick={() => navigate(`/task/${task.id}`)} >edit</button>
                <button className='bg-red-700 w-[4rem]' onClick={(e) => deleteTask(task)}>delete</button>
            </div>
        </li>
    ))

    return (
        <section className=''>
            <h3 className='text-center py-3 font-medium'>Task List</h3>
            <ul className='space-y-3 ' >
                {renderedTasks && renderedTasks.length > 0 ? renderedTasks : <p>No tasks found</p>}
            </ul>
        </section>
    );
};

export default TasksList;
