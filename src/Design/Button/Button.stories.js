import React from 'react';

import Button from './Button';
import "../../index.css";

export default {
  title: 'Design/Button',
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Button",
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: "Delete",
};

export const Passive = Template.bind({});
Passive.args = {
  active: false,
  children: "Button",
};