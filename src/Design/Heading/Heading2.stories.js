import React from 'react';

import Heading2 from './Heading2';
import "../../index.css";

export default {
  title: 'Design/Heading',
  component: Heading2,
  argTypes: {},
};

const Template2 = (args) => <Heading2 {...args} />;

export const Heading_2 = Template2.bind({});
Heading_2.args = {
  children: "Heading 2",
};