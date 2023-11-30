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
        <div className='min-h-[100vh] w-[100vw] pt-8 bg-slate-100 flex flex-col items-center box-border'>
            <h1 className='mb-6 text-4xl text-sky-800 font-bold'>TODO List</h1>
            <div className='px-6 pb-6 max-w-[600px]  w-full sm:w-[600px] rounded'>
                <div className='flex justify-between w-full py-6'>
                    <input type="search" className='border'/>
                    <button>Action</button>
                    <TodoModal />
                </div>
                <TodoList />
            </div>
        </div>
    );
};
export default App;
