import React from "react";

import AddTodo from "../components/AddTodo.js";

export default {
  component: AddTodo,
  title: "AddTodo",
};

const Template = (args) => <AddTodo {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Add",
};
