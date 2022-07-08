import React from 'react';

import ListItem from './ListItem';
import "../../index.css";

export default {
  title: 'Design/List/ListItem',
  component: ListItem,
  argTypes: {},
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: false,
  children: "ListItem",
  onClick: false,
};

export const Clickable = Template.bind({});
Clickable.args = {
  active: false,
  onClick: console.log("Hello world!"),
  children: "ListItem",
};

export const Active = Template.bind({});
Active.args = {
  active: true,
  onClick: console.log("Hello world!"),
  children: "ListItem",
};