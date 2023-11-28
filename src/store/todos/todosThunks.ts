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
        const data = await todosService.create(todo);
        return data;
    } catch (error) {
        throw new Error('Failed to create todo');
    }
});

const updateTodo = createAsyncThunk(ActionTypes.UPDATE_TODO, async (params: { id: number; todo: ITodo }) => {
    try {
        const { id, todo } = params;
        const data = await todosService.update(id, todo);
        console.log(data);
        return data;
    } catch (error) {
        throw new Error('Failed to update todos');
    }
});

const deleteTodo = createAsyncThunk(ActionTypes.DELETE_TODO, async (params: number) => {
    try {
        const data = await todosService.delete(params);
        return data;
    } catch (error) {
        throw new Error('Failed to delete todo');
    }
});

export { getAllTodos, addTodo, updateTodo, deleteTodo };
