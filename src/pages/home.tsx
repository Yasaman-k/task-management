import TaskList from '../features/task/tasksList';
import { staticText } from '../staticText';
import AddTaskForm from '../features/task/AddTaskForm';

const Home = () => {
    return (
        <div className=" p-4 space-y-4 ">
            <header className='bg-slate-800 flex justify-center h-32 p-2'>
                <h1 className="text-3xl font-bold text-cen self-center text-white">{staticText.title}</h1>
            </header>

            <main>
                <AddTaskForm />
                <TaskList />
            </main>
        </div>
    )
}

export default Home