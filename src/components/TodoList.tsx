import { FC, useMemo, useState } from 'react';
import { useAppSelector } from '../store/hooks';

import TodoItem from './TodoItem';

import Pagination from './Pagination';

const PageSize = 10;

interface ITodoListProps {
    search: string;
    selected: string;
}

const TodoList: FC<ITodoListProps> = ({ search, selected }) => {
    const todos = useAppSelector((state) => state.todos.list);

    const searchedTodos = todos.filter((todo) => todo.title.includes(search));
    
    const selectedTodos = searchedTodos.filter(todo => {
        if(selected === 'completed') {
            return todo.completed === true;
        } else if (selected === 'incomplete') {
            return todo.completed === false;
        } else {
            return todo
        }
    })

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return selectedTodos.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, selectedTodos]);

    console.log(currentTableData);

    return (
        <div>
            <ul className='flex flex-col max-w-[600px] py-6 px-6 m-4box-border'>
                {currentTableData.map((todo) => (
                    <TodoItem key={todo.id} title={todo.title} completed={todo.completed} id={todo.id} />
                ))}
            </ul>
            <div className='flex justify-center'>
                <Pagination
                    className='pagination-bar'
                    currentPage={currentPage}
                    totalCount={selectedTodos.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default TodoList;
