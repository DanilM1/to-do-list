import Task from "./Task";

const TasksList = ({
  tasks,
  onWriteChangeTask,
  onFixationTask,
  onDeleteTask
}) => {
  const items = tasks.map((item) => {
    const { key, ...itemProps } = item;
    return (
      <Task
        key={key}
        task={itemProps.task}
        checked={itemProps.checked}
        pensil={itemProps.pensil}
        onWriteChangeTask={() => onWriteChangeTask(key)}
        onFixationTask={() => onFixationTask(key)}
        onDeleteTask={() => onDeleteTask(key)}
      />
    );
  });
  return <>{items}</>;
};

export default TasksList;
