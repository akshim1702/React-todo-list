
const TodoTask = () => {
    return (
        <li className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
            <input type="checkbox" className="w-6 h-6 text-blue-500 bg-gray-200 rounded border-gray-400 focus:ring-1 focus:ring-blue-200" name="" id="" />
            <span className="text-gray-700">Task 1</span>
            <select name="" id="" className="mt-1 block w-auto  p-2 text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400 hover:bg-gray-50 transition-all duration-200 ease-in-out">
                <option value="">Pending</option>
            </select>
            <button className="text-red-500 hover:text-red-700 focus:outline-none">
                Delete
            </button>
        </li>
    )
}

export default TodoTask