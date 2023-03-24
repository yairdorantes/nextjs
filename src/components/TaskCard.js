import { useTasks } from "@/context/TaskContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div onClick={() => router.push(`/edit/${task.id}`)}>
      {/* <div>{task.id}</div> */}
      <div>{task.title}</div>
      <div>{task.description}</div>
      <button
        className="btn btn-error"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
          toast.success("deleted :)");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskCard;
