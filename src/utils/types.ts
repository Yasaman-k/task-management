type TaskType = {
  id?: number;
  title: string;
  description: string;
  completed: boolean;
};

interface TaskResult {
  count: number;
  results: TaskType[];
}
