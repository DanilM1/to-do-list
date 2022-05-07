const Task = ({
  task,
  checked,
  pensil,
  onWriteChangeTask,
  onFixationTask,
  onDeleteTask
}) => {
  return (
    <div className="list-group">
      <label className="list-group-item">
        <input
          className="form-check-input me-1"
          type="checkbox"
          defaultChecked={checked}
          onClick={onFixationTask}
        />
        {task}
      </label>
      <div
        className="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button
            type="button"
            className="btn btn-secondary"
            style={{ display: pensil }}
            onClick={onWriteChangeTask}
          >
            <i className="bi bi-pencil"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onDeleteTask}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
