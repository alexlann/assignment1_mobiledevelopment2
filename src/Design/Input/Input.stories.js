import React from 'react';

import Input from './Input';
import "../../index.css";

export default {
  title: 'Design/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search...",
};