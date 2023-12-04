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
        setSelected(e.target.value);
    };

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <div className='min-h-[100vh] w-[100vw] pt-8  flex flex-col items-center box-border bg-gray-50'>
            <div className='flex flex-col border border-slate-400 rounded mx-5 sm:min-w-[600px]'>
                <h1 className='p-6 text-4xl text-sky-800 font-bold bg-sky-100 rounded'>TODO List</h1>

                <div className='pb-5 max-w-[600px] w-full rounded bg-white'>
                    <div className='flex px-6 justify-between items-center pt-4 bg-sky-100'>
                        <div className='flex gap-5 flex-col sm:flex-row items-end w-full pb-8'>
                            <SearchInput value={searchValue} onChange={handleSearchChange} />
                            <div className='flex items-center gap-5'>
                                <SelectButton value={selected} onChange={handleSelectChange} />
                                <TodoModal />
                            </div>
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
        </div>
    );
};
export default App;
