"use client";
import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
const page = ({ params }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { tasks, createTask, editTask } = useTasks();
  const router = useRouter();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      editTask(params.id, data);
      toast.success("updated sucessfully");
    } else {
      createTask(data);
      toast.success("Created sucessfully");
    }
    router.push("/");
  });
  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id == params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="title"
        {...register("title", { required: true })}
      />
      {errors.title && <span>Required please</span>}
      <textarea
        placeholder="descrip"
        {...register("title", { required: true })}
      ></textarea>
      {errors.description && <span>Required please</span>}

      <button type="submit">Save</button>
    </form>
  );
};

export default page;
