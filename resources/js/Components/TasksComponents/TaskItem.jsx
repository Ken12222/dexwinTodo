import { Link, router } from "@inertiajs/react";
import TaskButton from "./Button";
import { useEffect } from "react";

export default function TaskItem({ tasks }) {
    function handleDelete(id) {
        router.delete(`Task/${id}`);
    }
    return (
        <>
            {Array.isArray(tasks) &&
                tasks.length > 0 &&
                tasks.map((task) => (
                    <div
                        key={task.id}
                        className="bg-gray-100 rounded-lg my-6 px-4 py-4"
                    >
                        <div className="flex justify-between">
                            <h3 className="pb-4 text-xl font-bold">
                                {task.title}
                            </h3>
                            {task.status ? (
                                <p className="text-green-700 bg-green-200 h-fit w-fit px-4 py-1 rounded-full">
                                    Completed
                                </p>
                            ) : (
                                <p className="text-orange-700 bg-orange-200 h-fit w-fit px-4 py-1 rounded-full">
                                    To-do
                                </p>
                            )}
                        </div>
                        {/* <p className="text-gray-500 bg-gray-200 w-fit px-4 py-1 my-2 rounded-full">
                            {task.created_at}
                        </p> */}
                        <div className="flex justify-between mt-4">
                            <Link
                                className="bg-black text-white px-4 py-2 hover:bg-gray-900 rounded"
                                href={route(`task.show`, { id: task.id })}
                            >
                                View
                            </Link>
                            <button onClick={() => handleDelete(task.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
        </>
    );
}
