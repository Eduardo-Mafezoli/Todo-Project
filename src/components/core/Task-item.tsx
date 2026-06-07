import { cx } from "class-variance-authority";
import React from "react";
import useTask from "../../hooks/use-task";
import { type Task, TaskState,  } from "../../models/task";
import ButtonIcon from "../ui/Button-Icon";
import Card from "../ui/Card";
import InputCheckbox from "../ui/Input-checkbox";
import InputText from "../ui/Input-text";
import Text from "../ui/Text";
import Skeleton from "../ui/Skeleton";

interface TaskItemProps {
  task: Task
  loading?: boolean;
}

export default function TaskItem({task, loading}: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(task.state === TaskState.Creating)

  const [taskTitle, setTaskTitle] = React.useState(task.title || "")
  const { updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask } = useTask()

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id)
    }
    
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "")
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateTask(task.id, {title: taskTitle})
    setIsEditing(false)
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked)
  }

  async function handleDeleteTask() {
    await deleteTask(task.id)
  }

  return (
    
      <Card size="md">
        {!isEditing ?
        <div className="flex items-center gap-4">
          <InputCheckbox checked={task?.concluded} onChange={handleChangeTaskStatus} loading={loading}/>
          {!loading ? <Text className={cx("flex-1", {"line-through" : task?.concluded})}>{task?.title}</Text>: <Skeleton className="flex-1 h-6"/>}
          <div className="flex gap-1">
            <ButtonIcon type="button" icon="trash" variant="tertiary" onClick={handleDeleteTask} loading={loading} handling={isDeletingTask}/>
            <ButtonIcon type="button" icon="pencil" variant="tertiary" onClick={handleEditTask} loading={loading} />
          </div>
        </div>  
        : 
        <form action="" onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
          <div className="flex gap-1">
            <ButtonIcon type="button" icon="x" variant="secondary" onClick={handleExitEditTask} />
            <ButtonIcon type="submit" icon="check" variant="primary" handling={isUpdatingTask} />
          </div>  
          </form>
        }
      </Card>
    
  )
}