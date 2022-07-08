import React from 'react';

import Detail from './Detail';
import "../../index.css";

export default {
  title: 'Design/Detail',
  component: Detail,
  argTypes: {},
};

const Template = (args) => <Detail {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
};