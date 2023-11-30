import { FC, useMemo, useState } from 'react';
import { useAppSelector } from '../store/hooks';

import TodoItem from './TodoItem';

import Pagination from './Pagination';

const PageSize = 10;

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.list);

    const [currentPage, setCurrentPage] = useState<number | any>(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return todos.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, todos]);

    console.log(currentTableData);

    return (
        <div>
            <ul className='flex flex-col max-w-[600px] pb-6 m-4box-border'>
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
