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
        return Inertia::render("Welcome", ["tasks"=>$tasks]);
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

        return Inertia::render("Welcome", 
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
        $task = Task::findOrFail($id);
        return Inertia::render("Task/Edit", ["task"=>$task]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $task = Task::findOrFail($id);
        $validateTaskData = $request->validate([
            "title"=>"sometimes|nullable|string|max:255",
            "description"=>"sometimes|nullable|string|max:255",
            "status"=>"sometimes|boolean"
        ]);

        empty($validateTaskData["title"]) ? $validateTaskData["title"] = $task["title"] : "";
        empty($validateTaskData["description"]) ? $validateTaskData["description"] = $task["description"] : "";

        $fetchTask = Task::findOrfail($id);
        $updateTask = $fetchTask->update($validateTaskData);

        if(!$updateTask){
            return Inertia::render("Task/Edit", [
                "id"=>$id,
                "error"=>"Failed to update task"
            ]);
        }

        return Inertia::render("Task/Show", 
        [
            "task"=>Task::findOrFail($id),
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
            return Inertia::render("Welcome", [
                "error"=>"failed to delete task try again"
            ]);
        }

        return Inertia::render("Welcome", [
            "message"=>"Delete was successful"
        ]);
    }
}
