import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil, Trash } from "lucide-react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (taskName.trim() === "") return;
    setTasks([...tasks, taskName]);
    setTaskName("");
  };

  const handleEditTask = (index) => {
    setTaskName(tasks[index]);
    setIsEditing(true);
    setCurrentTaskIndex(index);
  };

  const handleSaveTask = () => {
    if (taskName.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[currentTaskIndex] = taskName;
    setTasks(updatedTasks);
    setTaskName("");
    setIsEditing(false);
    setCurrentTaskIndex(null);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="primary">Add Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{isEditing ? "Edit Task" : "Add Task"}</DialogTitle>
            </DialogHeader>
            <Input
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              placeholder="Task name"
              className="mb-4"
            />
            <Button onClick={isEditing ? handleSaveTask : handleAddTask}>
              {isEditing ? "Save" : "Add"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{task}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="icon" onClick={() => handleEditTask(index)}>
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => handleDeleteTask(index)}>
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Tasks;