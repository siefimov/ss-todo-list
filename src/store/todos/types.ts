export interface ITodo {
    id: number | string;
    title: string;
    completed?: boolean;
}

export interface ITodoState {
    list: ITodo[];
    loading: boolean;
    error: string | null;
}
