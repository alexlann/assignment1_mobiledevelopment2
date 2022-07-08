import React from 'react';

import Header from './Header';
import "../../index.css";

export default {
  title: 'Design/Header',
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});