import React from "react";

import CreateNewTask from "./Components/CreateNewTask";
import TasksList from "./Components/TasksList";

import "./styles.css";

export default class App extends React.Component {
  state = {
    task: "",
    tasks: [
      { key: 1, task: "one", checked: "checked", pensil: "none" },
      { key: 2, task: "two", checked: "", pensil: "" }
    ],
    max: 0
  };

  onWriteNewTask = (task) => {
    this.setState({ task });
  };

  onAddNewTask = (task) => {
    let Nmax = 0;

    if (this.state.max === 0) {
      for (const value of this.state.tasks) {
        if (value.key > Nmax) Nmax = value.key;
      }
      this.setState((max) => ({
        max: Nmax + 1
      }));
    }

    this.setState(({ tasks, max }) => ({
      max: max + 1,
      tasks: [...tasks, { key: max, task: task, checked: "", pensil: "" }]
    }));
  };

  onWriteChangeTask = (key) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((item) => {
        if (item.key === key) return { ...item, task: this.state.task };
        return item;
      })
    }));
  };

  onFixationTask = (key) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.map((item) => {
        if (item.key === key)
          return {
            ...item,
            checked: item.checked === "" ? "checked" : "",
            pensil: item.pensil === "" ? "none" : ""
          };
        return item;
      })
    }));
  };

  onDeleteTask = (key) => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter((item) => item.key !== key)
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <CreateNewTask
            onWriteNewTask={this.onWriteNewTask}
            onAddNewTask={this.onAddNewTask}
          />
          <h1>Your tasks list</h1>
          <TasksList
            tasks={this.state.tasks}
            onWriteChangeTask={this.onWriteChangeTask}
            onFixationTask={this.onFixationTask}
            onDeleteTask={this.onDeleteTask}
          />
        </div>
      </div>
    );
  }
}
