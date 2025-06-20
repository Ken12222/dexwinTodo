import HeaderBar from "@/Components/HeaderBar/headerbar";
import InputLabel from "@/Components/InputLabel";
import TaskButton from "@/Components/TasksComponents/Button";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";

export default function CreateTask() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
    });
    function handleAddTask(e) {
        e.preventDefault();

        post("/Task");
    }
    return (
        <>
            <HeaderBar />

            <section className="w-5/6 md:w-4/6 mx-auto">
                <h1 className="text-2xl my-8">Add New Task</h1>
                <form onSubmit={handleAddTask}>
                    <div className="my-4">
                        <InputLabel value={"Title"} />
                        <TextInput
                            value={data.title}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    title: e.target.value,
                                })
                            }
                            //name="title"
                            className="w-full mx-auto focus outline-green-900 "
                            placeholder="Enter Task title"
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
                            placeholder="Enter Task description"
                        />
                        <p className="text-red-600 text-sm pt-1">
                            {errors && errors.description}
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
