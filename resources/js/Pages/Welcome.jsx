import HeaderBar from "@/Components/HeaderBar/headerbar";
import TaskItem from "@/Components/TasksComponents/TaskItem";
import TextInput from "@/Components/TextInput";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Welcome({ tasks }) {
    return (
        <>
            <HeaderBar />
            <main className="w-5/6 md:w-4/6 mx-auto">
                <h1 className="py-4 text-gray-500">Welcome Back</h1>
                <h1 className="py-4 font-bold text-2xl">
                    You've got <br /> {tasks && tasks.length} tasks today
                </h1>
                <TextInput
                    className="w-full bg-gray-100"
                    placeholder="Search task"
                    name="searchquery"
                />
                <TaskItem tasks={tasks} />
                <Link
                    href={route("task.create")}
                    className="bg-black text-white hover:bg-gray-900 py-4 px-16 w-full rounded"
                >
                    Add Task
                </Link>
            </main>
        </>
    );
}
