import { FC } from 'react';

import TodoItem from './TodoItem';
import { ITodoItemProps } from './TodoItem';

const todos: ITodoItemProps[] = [
    {
        id: '1',
        title: 'first todo',
        isCompleted: false,
    },
    {
        id: '2',
        title: 'second todo',
        isCompleted: false,
    },
];

const TodoList: FC = () => (
    <ul className='flex flex-col gap-2 w-[600px] bg-sky-100 p-6 rounded-md'>
        {todos.map((todo) => (
            <TodoItem key={todo.id} title={todo.title} isCompleted={todo.isCompleted} />
        ))}
    </ul>
);

export default TodoList;
