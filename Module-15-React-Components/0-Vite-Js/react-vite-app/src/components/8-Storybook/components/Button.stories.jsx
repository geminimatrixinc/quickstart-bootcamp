import React from "react";
import Button from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  color: "#007BFF",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  color: "#6C757D",
};

export const Clickable = Template.bind({});
Clickable.args = {
  label: "Click Me",
  onClick: () => alert("Button clicked!"),
};