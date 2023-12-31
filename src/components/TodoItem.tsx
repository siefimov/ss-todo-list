import { FC, useEffect, useRef, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo, updateTodo } from '../store/todos/todosThunks';
import toast from 'react-hot-toast';

export interface ITodoItemProps {
    id: number | string;
    title: string;
    completed?: boolean;
}

const TodoItem: FC<ITodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [isCompleted, setIsCompleted] = useState(completed);

    const handleClickCheckbox = () => {
        setIsCompleted((prev) => !prev);

        dispatch(updateTodo({ todo: { id: id, title: title, completed: isCompleted } }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        if (title === newTitle) {
            return toast.error('No changes made');
        }
        dispatch(updateTodo({ todo: { id: id, title: newTitle } }));
        setIsEditing(false);
        toast.success('Task updated successful');
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewTitle(title);
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id));
        toast.success('Task deleted successful');
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <li className='flex justify-between items-center min-h-[44px] border-b-slate-300 odd:border-b-[1px] even:border-b-[1px] last:border-b-0 px-3 py-2 text-slate-600 bg-white'>
            <div className='flex items-center w-3/4'>
                {isEditing ? (
                    <>
                        <input type='checkbox' checked={isCompleted} className='h-5 w-5 mr-4' />
                        <input
                            type='text'
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleSaveClick();
                                }
                            }}
                            ref={inputRef}
                            className='block w-full outline-none text-sky-700 bg-slate-100'
                        />
                    </>
                ) : (
                    <>
                        <input
                            type='checkbox'
                            checked={isCompleted}
                            onChange={handleClickCheckbox}
                            className='h-5 w-5 mr-4'
                        />
                        <span className={`block w-full ${isCompleted ? 'text-slate-400 line-through' : ''}`}>
                            {title}
                        </span>
                    </>
                )}
            </div>
            <div className='flex'>
                {isEditing ? (
                    <>
                        <div
                            onClick={handleSaveClick}
                            className='p-1 bg-green-100 mr-2 rounded hover:cursor-pointer hover:bg-green-200 text-xs'
                        >
                            Save
                        </div>
                        <div
                            onClick={handleCancelClick}
                            className='p-1 bg-gray-100 rounded hover:cursor-pointer hover:bg-gray-200 text-xs'
                        >
                            Cancel
                        </div>
                    </>
                ) : (
                    <div
                        onClick={handleEditClick}
                        className='p-1 border border-sky-400 mr-2 rounded hover:cursor-pointer hover:bg-sky-200 text-sl text-base'
                    >
                        <MdEdit />
                    </div>
                )}
                {isEditing ? null : (
                    <div
                        onClick={handleDeleteClick}
                        className='p-1 border border-red-400 rounded hover:cursor-pointer hover:bg-red-200 text-slate-500'
                    >
                        <MdDelete />
                    </div>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
