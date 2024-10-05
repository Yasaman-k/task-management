import React from 'react';
import { staticText } from '../../staticText';

interface TaskPageProps {
    children?: React.ReactNode; // Specify that it can receive children
}
const Layout: React.FC<TaskPageProps> = ({ children }) => {
    return (
        <div className='p-4 space-y-4'>
            <header className='bg-slate-800 flex justify-center h-32 p-2'>
                <h1 className="text-3xl font-bold text-cen self-center text-white">{staticText.title}</h1>
            </header>

            {/* Outlet is where the child routes are rendered */}
            <main className='w-full container mx-auto'>
                {children}
            </main>

            <footer>
                <p>© 2024 Task Manager</p>
            </footer>
        </div>
    );
};

export default Layout;
