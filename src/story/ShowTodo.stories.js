import React from "react";

import Todo from "../components/Todos.js";

export default {
  component: Todo,
  title: "ShowTodo",
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});
export const TwoList = Template.bind({});

Default.args = {
  todolist: [],
};
TwoList.args = {
  todolist: [
    { title: "buy milk", id: 1 },
    { title: "prepare tea", id: 2 },
  ],
};
