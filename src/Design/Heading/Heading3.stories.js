import React from 'react';

import Heading3 from './Heading3';
import "../../index.css";

export default {
  title: 'Design/Heading',
  component: Heading3,
  argTypes: {},
};

const Template3 = (args) => <Heading3 {...args} />;

export const Heading_3 = Template3.bind({});
Heading_3.args = {
  children: "Heading 3",
};