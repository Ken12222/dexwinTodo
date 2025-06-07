import HeaderBar from "@/Components/HeaderBar/headerbar";
import InputLabel from "@/Components/InputLabel";
import TaskButton from "@/Components/TasksComponents/Button";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";

export default function EditTask({ task, errors }) {
    const { data, setData, processing } = useForm({
        title: "",
        description: "",
        status: false,
    });

    function handleUpdateTask(e) {
        e.preventDefault();

        router.post(`/Task/${task.id}`, data);
    }
    return (
        <>
            <HeaderBar />

            <section className="w-5/6 md:w-4/6 mx-auto">
                <h1 className="text-2xl my-8">Update Task</h1>
                <form onSubmit={handleUpdateTask}>
                    <div className="my-4">
                        <InputLabel value={"Title"} />
                        <TextInput
                            value={data.title}
                            placeholder={task.title}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    title: e.target.value,
                                })
                            }
                            //name="title"
                            className="w-full mx-auto focus outline-green-900 "
                        />
                        <p className="text-red-600 text-sm pt-1">
                            {errors && errors.title}
                        </p>
                    </div>
                    <div className="my-4">
                        <InputLabel value={"Description"} />
                        <TextInput
                            value={data.description}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    description: e.target.value,
                                })
                            }
                            //name="description"
                            className="w-full mx-auto focus outline-green-900 "
                            placeholder={task.description}
                        />
                        <p className="text-red-600 text-sm pt-1">
                            {errors && errors.description}
                        </p>
                    </div>
                    <div className="my-4">
                        <InputLabel value={"Status"} />
                        <select
                            className="w-full rounded-lg border-gray-300"
                            value={data.status}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    status: e.target.value,
                                })
                            }
                        >
                            <option value={task.status}>
                                {status ? "Completed" : "To-do"}
                            </option>
                            <option value={1}>Completed</option>
                            <option value={0}>To-do</option>
                        </select>

                        <p className="text-red-600 text-sm pt-1">
                            {errors && errors.status}
                        </p>
                    </div>

                    {/* <div className="my-4">
                                    <InputLabel value={"Date"} />
                                    <TextInput
                                    type="date"
                                    name="date"
                                    className="w-full mx-auto focus outline-green-900 "
                                    placeholder="Enter Task Date"
                                    />
                                    </div> */}

                    <TaskButton buttonName={"Submit"} />
                </form>
            </section>
        </>
    );
}
