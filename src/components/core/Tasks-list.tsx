import useTask from "../../hooks/use-task";
import  useTasks  from "../../hooks/use-tasks";
import { TaskState, type Task } from "../../models/task";
import Button from "../ui/Button";
import TaskItem from "./Task-item";

export default function TaskList() {
  const { tasks, isLoadingTasks } = useTasks();
  const { prepareTask } = useTask();

  
  function handleNewTask() {
    prepareTask()
  }

  return (
  <>
    <section>
      <Button icon="plus" className="w-full" onClick={handleNewTask} disabled={tasks.some((task) => task.state === TaskState.Creating) || isLoadingTasks}>New Task</Button>
    </section>
    <section className="space-y-2">
      {!isLoadingTasks && tasks.map((task) =>
         <TaskItem key={task.id} task={task} />
      )}
      {isLoadingTasks && <>
        <TaskItem task={{} as Task} loading/>
        <TaskItem task={{} as Task} loading/>
        <TaskItem task={{} as Task} loading/>
      </> }
    </section>
  </>
  )
}