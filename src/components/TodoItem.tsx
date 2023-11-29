import { FC, useEffect, useRef, useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useAppDispatch } from '../store/hooks';
import { deleteTodo, updateTodo } from '../store/todos/todosThunks';

export interface ITodoItemProps {
    id: number | string | undefined;
    title: string;
    completed?: boolean;
}

const TodoItem: FC<ITodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [isCompleted, setIsCompleted] = useState(completed);

    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const handleClickCheckbox = () => {
        setIsCompleted(!isCompleted);
        console.log(completed);
        dispatch(updateTodo({ id: id, todo: { title: title, completed: isCompleted } }));
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        dispatch(updateTodo({ id: id, todo: { title: newTitle } }));
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setNewTitle(title);
    };

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    return (
        <li className='flex justify-between items-center min-h-[44px] border rounded p-2 bg-white'>
            <div className='flex items-center'>
                {isEditing ? (
                    <>
                        <input type='checkbox' checked={isCompleted} />
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
                            className='mx-4 outline-none text-sky-800'
                        />
                    </>
                ) : (
                    <>
                        <input type='checkbox' checked={isCompleted} onChange={() => handleClickCheckbox()} />
                        <span className={`mx-4 ${isCompleted ? 'text-slate-400 line-through' : ''}`}>{title}</span>
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
                        className='p-1 border border-sky-400 mr-2 rounded hover:cursor-pointer hover:bg-sky-200 text-[#585858] text-base'
                    >
                        <MdEdit />
                    </div>
                )}
                {isEditing ? null : (
                    <div
                        onClick={() => dispatch(deleteTodo(id))}
                        className='p-1 border border-red-400 rounded hover:cursor-pointer hover:bg-red-200 text-slate-600'
                    >
                        <MdDelete />
                    </div>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
