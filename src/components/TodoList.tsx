import { FC, useMemo, useState } from 'react';

import TodoItem from './TodoItem';
import { useAppSelector } from '../store/hooks';

import Pagination from './Pagination';

const PageSize = 8;

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.list);

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return todos.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, todos]);

    return (
        <div>
            <ul className='flex flex-col gap-3 max-w-[700px] p-6 m-4 border border-sky-300 rounded bg-slate-100'>
                {currentTableData.map((todo) => (
                    <TodoItem key={todo.id} title={todo.title} completed={todo.completed} id={todo.id} />
                ))}
            </ul>
            <div className='flex justify-center'>
                <Pagination
                    className='pagination-bar'
                    currentPage={currentPage}
                    totalCount={todos.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default TodoList;
