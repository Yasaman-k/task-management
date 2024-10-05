import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks, selectAllTasks } from './taskSlice';

const TasksList: React.FC = () => {
    const tasks = useSelector(selectAllTasks)
    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const renderedTasks = tasks?.tasks.map((task: TaskType) => (
        <li key={task.id} className='space-x-4 flex justify-between border p-2 w-full md:w-1/2 lg:w-1/3 m-auto '>
            <div className='flex space-x-4 items-center '>
                <input type='checkbox' defaultChecked={task.completed} />

                <div >
                    <p> {task.title} </p>
                    <p className=''> {task.description}</p>
                </div>

            </div>
            <div className='space-x-2 w-34 grow '>
                <button className='bg-yellow-700 w-16'>edit</button>
                <button className='bg-red-700 w-16'>delete</button>
            </div>
        </li>
    ))

    return (
        <section className=''>
            <h3 className='text-center py-3 font-medium'>Task List</h3>
            <ul className=' space-y-3' >
                {renderedTasks && renderedTasks.length > 0 ? renderedTasks : <p>No tasks found</p>}
            </ul>
        </section>
    );
};

export default TasksList;


<div className="w-full md:w-1/2 lg:w-1/3 p-4 m-auto bg-blue-200 rounded-md shadow-md">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-center">
        Responsive Heading
    </h2>
    <p className="text-sm md:text-base lg:text-lg text-gray-700 text-center">
        This is a responsive text inside a div. It adjusts its size and layout depending on the screen width,
        ensuring a consistent user experience on mobile, tablet, and desktop.
    </p>
</div>
