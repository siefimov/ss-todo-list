import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { todosService } from './todosService';
import { ITodo } from './types';

interface Response extends ITodo {
    data: {
        id: number;
        title: string;
        userId?: number;
        completed?: boolean;
    };
}

const getAllTodos = createAsyncThunk(ActionTypes.TODOS, async () => {
    const response = await todosService.getAll();
    return response;
});

const addTodo = createAsyncThunk(ActionTypes.ADD_TODO, async (params: string) => {
    const todo = {
        title: params,
        userId: 1,
        completed: false,
    };
    try {
        const response = (await todosService.create(todo)) as Response;
        const { title, userId, completed } = response.data;
        const userData = {
            id: Math.ceil(Math.random() * 100),
            title,
            userId,
            completed,
        };
        return userData;
    } catch (error) {
        throw new Error('Failed to create todo');
    }
});

const updateTodo = createAsyncThunk(ActionTypes.UPDATE_TODO, async (params: { todo: ITodo }) => {
    try {
        const { todo } = params;
        const response = (await todosService.update(todo.id, todo)) as Response;

        return response.data;
    } catch (error) {
        throw new Error('Failed to update todos');
    }
});

const deleteTodo = createAsyncThunk(ActionTypes.DELETE_TODO, async (params: number | string | undefined) => {
    try {
        const response = await todosService.delete(params);
        console.log(response);
        console.log(params);
        return params;
    } catch (error) {
        throw new Error('Failed to delete todo');
    }
});

export { getAllTodos, addTodo, updateTodo, deleteTodo };
