import HeaderBar from "@/Components/HeaderBar/headerbar";
import TaskButton from "@/Components/TasksComponents/Button";
import { Link } from "@inertiajs/react";

export default function ShowTskDetails({ task, message, error }) {
    return (
        <>
            <HeaderBar />
            <main className="w-5/6 md:w-4/6 mx-auto my-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold my-4">Task Details</h1>
                    {task.status ? (
                        <p className="text-green-700 bg-green-200 w-fit h-fit px-4 py-1 rounded-full">
                            Completed
                        </p>
                    ) : (
                        <p className="text-orange-700 bg-orange-200 w-fit h-fit px-4 py-1 rounded-full">
                            To-do
                        </p>
                    )}
                </div>
                {message && (
                    <p className="text-green-900 bg-green-200 p-4 rounded text-sm my-4">
                        {message}
                    </p>
                )}
                {error && (
                    <p className="text-red-600 bg-red-200 p-4 rounded text-sm my-4">
                        {error}
                    </p>
                )}
                <div className="bg-gray-200 p-4 rounded">
                    <p className="text-gray-500 text-sm">Task Title</p>
                    <h2 className="text-xl my-2">{task.title}</h2>
                </div>
                <div className="bg-gray-200 p-4 rounded my-8">
                    <p className="text-gray-500 text-sm">Description</p>
                    <p className="text-xl my-2">{task.description}</p>
                </div>
                <Link
                    href={`/Task/${task.id}/edit`}
                    className="bg-black text-white hover:bg-gray-900 py-4 px-16 w-full rounded"
                >
                    Update
                </Link>
            </main>
        </>
    );
}
