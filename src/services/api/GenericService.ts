import http from './http.api';

class GenericService<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    async getAll(): Promise<T[]> {
        const response = await http.get(`/${this.endpoint}`);
        return response.data;
    }

    async getOne(id: number | string): Promise<T> {
        const response = await http.get(`/${this.endpoint}/${id}`);
        return response.data;
    }

    async create(data: T): Promise<T> {
        return await http.post(`/${this.endpoint}`, data);
    }

    async update(id: number | string, data: T): Promise<T> {
        return await http.put(`/${this.endpoint}/${id}`, data);
    }

    async delete(id: number | string): Promise<void> {
        await http.delete(`/${this.endpoint}/${id}`);
    }
}

export default GenericService;
