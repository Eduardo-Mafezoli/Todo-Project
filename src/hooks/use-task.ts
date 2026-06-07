import React from "react";
import useLocalStorage from "use-local-storage-state";
import { delay } from "../helpers/utils";
import { type Task, Task_Key, TaskState } from "../models/task";



export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(Task_Key, { defaultValue: [] })
  const [isUpdatingTask, setIsUpdatingTask] = React.useState(false)
  const [isDeletingTask, setIsDeletingTask] = React.useState(false)

  function prepareTask() {
    setTasks([...tasks, { id: Math.random().toString(36).substring(2, 9), title: "", state: TaskState.Creating}])
  }

  async function updateTask(id: string, payload: {title: Task["title"]}) {
    setIsUpdatingTask(true)

    await delay(1000)
    try {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, state: TaskState.Created, ...payload}: task)
    ) } finally {
      setIsUpdatingTask(false)
    }
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, concluded} : task)
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTask(true)

    await delay(1000)
    try {
    setTasks(tasks.filter((task) => task.id !== id));
    } finally {
    setIsDeletingTask(false)
    }
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask
  }
}