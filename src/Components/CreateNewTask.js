import React from "react";

export default class CreateNewTask extends React.Component {
  state = {
    task: ""
  };

  onWriteNewTask = (e) => {
    const task = e.target.value;
    this.props.onWriteNewTask(task);
    this.setState({ task });
  };

  onAddNewTask = () => {
    this.props.onAddNewTask(this.state.task);
    this.setState(({ task }) => ({
      task: ""
    }));
  };

  render() {
    return (
      <>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            value={this.state.task}
            onChange={this.onWriteNewTask}
          ></textarea>
          <label htmlFor="floatingTextarea2">Write your new task:</label>
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={this.onAddNewTask}
        >
          Add new task
        </button>
      </>
    );
  }
}
