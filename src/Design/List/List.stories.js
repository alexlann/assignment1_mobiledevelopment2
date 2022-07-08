import React from 'react';

import List from './List';
import "../../index.css";

export default {
  title: 'Design/List',
  component: List,
  argTypes: {},
};

const Template = (args) => <List {...args} />;

export const List_Container = Template.bind({});
List_Container.args = {
  children: "List",
};