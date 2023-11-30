import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { useAppDispatch } from './store/hooks';
import { getAllTodos } from './store/todos/todosThunks';
import { TodoModal } from './components/TodoModal';
import { SearchInput } from './components/SearchInput';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useAppDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div className='min-h-[100vh] w-[100vw] pt-8  flex flex-col items-center box-border bg-slate-50'>
            <h1 className='mb-6 text-4xl text-sky-800 font-bold'>TODO List</h1>

            <div className='px-6 pb-6 max-w-[600px] sm:w-[600px] w-full rounded border bg-white'>
                <div className='flex justify-between items-center w-full py-6'>
                    <div className='flex flex-wrap justify-between w-full pb-5 border-b-[1px] items-center'>
                        <SearchInput value={searchValue} onChange={handleSearchChange} />
                        <TodoModal />
                    </div>
                </div>
                <TodoList search={searchValue} />
            </div>
        </div>
    );
};
export default App;
