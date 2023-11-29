import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionTypes } from './actionTypes';
import { todosService } from './todosService';
import { ITodo } from './types';

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
        const response = await todosService.create(todo);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create todo');
    }
});

const updateTodo = createAsyncThunk(ActionTypes.UPDATE_TODO, async (params: { id: number | string; todo: ITodo }) => {
    try {
        const { id, todo } = params;
        const response = await todosService.update(id, todo);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update todos');
    }
});

const deleteTodo = createAsyncThunk(ActionTypes.DELETE_TODO, async (params: number | string) => {
    try {
        const data = await todosService.delete(params);
        return params;
    } catch (error) {
        throw new Error('Failed to delete todo');
    }
});

export { getAllTodos, addTodo, updateTodo, deleteTodo };
