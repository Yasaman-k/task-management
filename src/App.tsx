import Button from './components/atoms/button';
import Input from './components/atoms/input';
import Textarea from './components/atoms/textarea';
import TaskList from './components/tasksList';
import Counter from './features/counter/Counter';
import { staticText } from './staticText';

function App() {

  const handleSubmit = () => {

  }

  return (
    <div className="w-full p-4 space-y-4">
      <header className='bg-slate-800 flex justify-center h-32'>
        <h1 className="text-3xl font-bold self-center text-white">{staticText.title}</h1>
      </header>

      <main className='m-auto flex flex-col space-y-4 w-full md:w-1/3'>
        <Counter />
        <div className=''>
          <h2>Add new Task here</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col space-y-3'>
              <Input type={'text'} name={'title'} />
              <Textarea name={'description'} />
              <Button name={staticText.AddTask} />
            </div>
          </form>
        </div>

        <div>
          <TaskList />

        </div>
      </main>
    </div>
  );
}

export default App;
