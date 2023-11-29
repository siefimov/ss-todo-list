import { FC } from 'react';

import TodoItem from './TodoItem';
import { useAppSelector } from '../store/hooks';

const TodoList: FC = () => {
    const todos = useAppSelector((state) => state.todos.list);

    return (
        <ul className='flex flex-col gap-3 max-w-[700px] p-6 m-4 border border-sky-300 rounded bg-slate-100'>
            {todos.map((todo) => (
                <TodoItem key={todo.id} title={todo.title} completed={todo.completed} id={todo.id} />
            ))}
        </ul>
    );
};

export default TodoList;
