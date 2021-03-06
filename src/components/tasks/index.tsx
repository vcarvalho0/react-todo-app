import { TodoType } from "../../pages/main";

import { Check, Trash, Task, Container } from "./style";

type TaskType = {
  task: TodoType;
  deleteTask: (taskToDelete: string) => void;
  completeTask: (taskToComplete: string) => void;
};

export const Tasks = ({ task, deleteTask, completeTask }: TaskType) => {
  return (
    <Container>
      <Task style={{ textDecoration: task.complete ? "line-through" : "" }}>
        {task.name}
      </Task>
      <Check onClick={() => completeTask(task.name)} />
      <Trash onClick={() => deleteTask(task.name)} />
    </Container>
  );
};
