import React from 'react';

import Container from './Container';
import "../../index.css";

export default {
  title: 'Design/Container',
  component: Container,
  argTypes: {},
};

const Template = (args) => <Container {...args} />;

export const Container_margin_left = Template.bind({});
Container_margin_left.args = {
  className: "container-margin-left",
  children: "Container",
};

export const Container_flex = Template.bind({});
Container_flex.args = {
  className: "container-flex",
  children: "Container",
};