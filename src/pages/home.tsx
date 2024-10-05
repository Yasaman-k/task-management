import TaskList from '../features/task/tasksList';

import AddTaskForm from '../features/task/AddTaskForm';
import Layout from '../components/layout';

const Home = () => {
    return (

        <Layout>
            <AddTaskForm />
            <TaskList />
        </Layout>

    )
}

export default Home