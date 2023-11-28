import GenericService from '../../services/api/GenericService';
import { ITodo } from './types';

export const todosService = new GenericService<ITodo>('todos');
