<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tasks = Task::all();
        return Inertia::render("/", ["tasks"=>$tasks]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Task/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TaskRequest $request)
    {
        $validateTaskData = $request->validated();

        $saveTask = Task::create($validateTaskData);

        return Inertia::render("Task", 
        [
            "tasks"=>Task::all(),
            "message"=>"Task has been added successfully"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $taskDetails = Task::findOrFail($id);

        return Inertia::render("Task/Show", ["task"=>$taskDetails]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render("task/edit", ["id"=>$id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TaskRequest $request, string $id)
    {
        $validateTaskData = $request->validated();
        $fetchTask = Task::findOrfail($id);
        $updateTask = $fetchTask->update($validateTaskData);

        return Inertia::render("tasks", 
        [
            "tasks"=>Task::all(),
            "message"=>"Update was successful"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $fetchTask = Task::findOrfail($id);
        $fetchTask->delete();

        if(!$fetchTask){
            return Inertia::render("task/show", [
                "message"=>"failed to delete task try again"
            ]);
        }

        return Inertia::render("task", [
            "message"=>"Delete was successful"
        ]);
    }
}
