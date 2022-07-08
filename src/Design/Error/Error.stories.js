import React from 'react';

import Error from './Error';
import "../../index.css";

export default {
  title: 'Design/Error',
  component: Error,
  argTypes: {},
};

const Template = (args) => <Error {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Something went wrong",
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
  children: "Something went wrong",
};