import React from 'react';

import Loader from './Loader';
import "../../index.css";

export default {
  title: 'Design/Loader',
  component: Loader,
  argTypes: {},
};

const Template = (args) => <Loader {...args} />;

export const Default = Template.bind({});