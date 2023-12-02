import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { useAppDispatch } from './store/hooks';
import { getAllTodos } from './store/todos/todosThunks';
import { TodoModal } from './components/TodoModal';
import { SearchInput } from './components/SearchInput';
import { SelectButton } from './components/SelectButton';
import { Toaster } from 'react-hot-toast';

const App = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useAppDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const [selected, setSelected] = useState('All');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
        setSelected(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div className='min-h-[100vh] w-[100vw] pt-8  flex flex-col items-center box-border bg-slate-50'>
            <h1 className='mb-6 text-4xl text-sky-800 font-bold'>TODO List</h1>

            <div className='px-6 pb-5 max-w-[600px] sm:w-[600px] w-full rounded border bg-white'>
                <div className='flex justify-between items-center w-full py-6 pt-8'>
                    <div className='flex flex-wrap justify-between w-full pb-8 border-b-[1px] items-center'>
                        <SearchInput value={searchValue} onChange={handleSearchChange} />
                        <SelectButton value={selected} onChange={handleSelectChange} />
                        <TodoModal />
                    </div>
                </div>
                <TodoList search={searchValue} selected={selected} />
            </div>
            <Toaster
                position='top-right'
                toastOptions={{
                    style: {
                        fontSize: '1rem',
                    },
                }}
            />
        </div>
    );
};
export default App;
