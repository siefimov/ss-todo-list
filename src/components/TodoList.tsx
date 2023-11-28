import { FC, useEffect } from 'react';

import TodoItem from './TodoItem';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getAllTodos } from '../store/todos/todosThunks';

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.list);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    return (
        <ul className='flex flex-col gap-2 max-w-[600px] bg-slate-100 p-6 rounded-md'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
            ))}
        </ul>
    );
};

export default TodoList;
