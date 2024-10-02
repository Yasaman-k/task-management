import TaskList from './features/task/tasksList';
import { staticText } from './staticText';
import AddTaskForm from './features/task/AddTaskForm';

function App() {
  return (
    <div className="w-full p-4 space-y-4">
      <header className='bg-slate-800 flex justify-center h-32'>
        <h1 className="text-3xl font-bold self-center text-white">{staticText.title}</h1>
      </header>

      <main className='m-auto flex flex-col space-y-4 w-full  md:w-1/2'>
        <AddTaskForm />

        <div>
          <TaskList />

        </div>
      </main>
    </div>
  );
}

export default App;
