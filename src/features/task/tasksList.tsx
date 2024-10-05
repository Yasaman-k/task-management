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
        <li key={task.id} className='flex  border p-2 '>
            <div className='flex  space-x-4 items-center w-[calc(100%-9rem)] '>
                <input className='w-10' type='checkbox' defaultChecked={task.completed} />

                <div className='w-[calc(100%-10rem)]' >
                    <p > {task.title} </p>
                    <p className='break-words'> {task.description}</p>
                </div>

            </div>
            <div className='flex justify-between self-center w-[9rem]'>
                <button className='bg-yellow-700 w-[4rem]'>edit</button>
                <button className='bg-red-700 w-[4rem]'>delete</button>
            </div>
        </li>
    ))

    return (
        <section className=''>
            <h3 className='text-center py-3 font-medium'>Task List</h3>
            <ul className='space-y-3 w-full container mx-auto' >
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
