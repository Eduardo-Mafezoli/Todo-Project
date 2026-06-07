import React from "react";
import  useLocalStorage from "use-local-storage-state";
import { delay } from "../helpers/utils";
import { type Task, Task_Key, TaskState  } from "../models/task";

export default function useTasks() {
   const [tasksData] = useLocalStorage<Task[]>(Task_Key, { defaultValue: [] });
   const [tasks, setTasks]  = React.useState<Task[]>([]);
   const [isLoadingTasks, setIsLoadingTasks] = React.useState(true);
   const isFirstLoad = React.useRef(true); 

   React.useEffect(() => {
      async function fetchTasks() {
         if (isFirstLoad.current) {
         await delay(2000);
         isFirstLoad.current = false; 
         setIsLoadingTasks(false);
         }
         setTasks(tasksData);
      }

      fetchTasks();
   }, [tasksData]);


   return {
    tasks,
    isLoadingTasks,
    createdTasksCount: tasks.filter((task) => task.state === TaskState.Created).length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length
   }
}