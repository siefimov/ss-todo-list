import { useEffect } from 'react';
import TodoList from './components/TodoList';
import { useAppDispatch } from './store/hooks';
import { getAllTodos } from './store/todos/todosThunks';
import { TodoModal } from './components/TodoModal';

const App = () => {
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div className='min-h-[100vh] w-[100vw] pt-16 bg-slate-50 flex flex-col items-center'>
            <h1 className='mb-6 text-4xl text-sky-800 font-bold'>TODO List</h1>
            <div className='flex justify-between max-w-[600px] w-full'>
                <TodoModal />
                <input type="search" name="" id="" className='border'/>
                <button>Action</button>
            </div>
            <TodoList />
        </div>
    );
};
export default App;
