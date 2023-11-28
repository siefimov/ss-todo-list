import TodoList from './components/TodoList';

const App = () => (
    <div className='min-h-[100vh] w-[100vw] pt-20 bg-slate-50 flex flex-col items-center'>
        <h1 className='text-4xl text-sky-500 font-bold'>TODO List</h1>
        <TodoList />
    </div>
);

export default App;
