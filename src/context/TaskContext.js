"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("no data");

  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const createTask = (task) => {
    setTasks([...tasks, { id: tasks.length + 1, ...task }]);
    console.log(tasks);
  };
  const deleteTask = (id) =>
    setTasks([...tasks.filter((task) => task.id != id)]);

  const editTask = (id, taskPass) => {
    console.log(id, taskPass);
    setTasks([
      ...tasks.map((task) => (task.id == id ? { ...task, ...taskPass } : task)),
    ]);
  };

  const contextData = {
    tasks,
    createTask,
    deleteTask,
    editTask,
  };

  return (
    <TaskContext.Provider value={contextData}>{children}</TaskContext.Provider>
  );
};

export default TaskContext;
