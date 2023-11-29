import { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTodo, getAllTodos } from '../store/todos/todosThunks';

export const TodoModal: FC = () => {
    const [newTodo, setNewTodo] = useState('');
    const [showModal, setShowModal] = useState(false);

    const dispatch = useAppDispatch();
    const inputRef: React.RefObject<HTMLInputElement> = useRef(null);

    const handleAddClick = () => {
        dispatch(addTodo(newTodo));
        setNewTodo('');
        setShowModal(false);
        dispatch(getAllTodos())
    };

    useEffect(() => {
        if (showModal) {
            inputRef.current?.focus();
        }
    }, [showModal]);

    return (
        <>
            <button
                className='bg-sky-600 hover:bg-sky-700
      font-bold px-5 py-3 rounded-xl text-sky-50 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                type='button'
                onClick={() => setShowModal(true)}
            >
                Add Todo
            </button>
            {showModal ? (
                <>
                    <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                                    <h3 className='text-2xl text-sky-800 font-semibold'>New Todo</h3>
                                    <button
                                        className='bg-transparent border-0 float-right'
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className='text-red-700 opacity-7 h-6 w-6 text-xl py-0 rounded-full hover:bg-red-100 flex justify-center items-center'>
                                            x
                                        </span>
                                    </button>
                                </div>
                                <div className='relative p-6 flex-auto'>
                                    <form className='w-full'>
                                        <label className='block text-slate-600 text-sm font-bold mb-1'>
                                            Todo Title
                                        </label>
                                        <input
                                            value={newTodo}
                                            onChange={(e) => setNewTodo(e.target.value)}
                                            ref={inputRef}
                                            className='appearance-none outline-none border border-slate-400 rounded w-full py-2 px-2 text-black'
                                        />
                                    </form>
                                </div>
                                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                    <button
                                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                                        type='button'
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='text-white bg-sky-600 hover:bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg  outline-none focus:outline-none mr-1 mb-1'
                                        type='button'
                                        onClick={handleAddClick}
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};
