"use client";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";
import React from "react";

const page = () => {
  const { tasks } = useTasks();
  return (
    <div>
      <div>
        {tasks.map((task, i) => (
          <div key={i}>
            <TaskCard task={task} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
