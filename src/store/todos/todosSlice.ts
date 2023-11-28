import { createSlice } from '@reduxjs/toolkit';
import { getAllTodos, addTodo, deleteTodo, updateTodo } from './todosThunks';
import { ITodoState } from './types';

const initialState: ITodoState = {
    list: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        });

        builder.addCase(addTodo.pending, (state) => {
            state.error = null;
        });
        builder.addCase(addTodo.fulfilled, (state, action) => {
            state.list.push(action.payload);
        });

        builder.addCase(updateTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(updateTodo.fulfilled, (state, action) => {
            const { id, title } = action.payload;
            const todoToUpdate = state.list.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.title = title;
            }
            state.loading = false;
        });

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        });
    },
});

export default todoSlice.reducer;
