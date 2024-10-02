import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../utils/api'; // Adjust the path
import { useSelector } from 'react-redux';
import { selectAllTasks } from '../features/task/taskSlice';

const TasksList: React.FC = () => {
    const [tasks, setTasks] = useState<TaskResult>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const tasks1 = useSelector(selectAllTasks)

    console.log(tasks1);



    const renderedTasks = tasks?.results.map((task: TaskType) => (
        <li key={task.id} className='flex justify-between border p-2 '>
            <div>
                <p> {task.title} </p>
                <p>{task.description}</p>
            </div>
            <p> {task.completed ? 'Completed' : 'Incomplete'}</p>
        </li>
    ))

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const allTasks = await getAllTasks();
                setTasks(allTasks);
                setLoading(false);
            } catch (err) {
                console.log(err);

                setError('Failed to fetch tasks');
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;



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
