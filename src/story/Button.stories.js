import React from "react";
import Button from "../components/Button.js";

export default {
  component: Button,
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Small = Template.bind({});

Default.args = {
  clr: "btn-primary",
};
Primary.args = {
  clr: "btn-primary",
  label: "Primary",
};
Secondary.args = {
  clr: "btn-secondary",
  label: "Secondary",
};

Small.args = {
  clr: "btn-primary",
  label: "Primary",
  size: "sm",
};
