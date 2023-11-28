import { FC } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

export interface ITodoItemProps {
    id?: string;
    title: string;
    completed?: boolean;
}

const TodoItem: FC<ITodoItemProps> = ({ title, completed }) => {
    return (
        <li className='flex justify-between items-center border rounded p-2 bg-white'>
            <div>
                <input type='checkbox' checked={completed} />
                <span className='mx-4'>{title}</span>
            </div>
            <div className='flex'>
                <MdEdit />
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
