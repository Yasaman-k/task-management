import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../utils/api'; // Adjust the path

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<TaskResult>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

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
        <div>
            <h1>Task List</h1>
            <ul className='space-y-3'>
                {tasks?.results.map((task) => (
                    <li key={task.id} className='flex justify-between border p-2 '>
                        <div>
                            <p> {task.title} </p>
                            <p>{task.description}</p>
                        </div>
                        <p> {task.completed ? 'Completed' : 'Incomplete'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
