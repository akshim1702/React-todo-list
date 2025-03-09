import { TodoForm, TodoList } from "../component"

const TodoMain = () => {
    return (
        <div className=" w-full flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">To-Do List</h1>
                <TodoForm />
                <TodoList />
            </div>
        </div>
    )
}

export default TodoMain