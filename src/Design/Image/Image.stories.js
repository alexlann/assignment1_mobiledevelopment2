import React from 'react';

import Image from './Image';
import "../../index.css";

export default {
  title: 'Design/Image',
  component: Image,
  argTypes: {},
};

const Template = (args) => <Image {...args} />;

export const Avatar = Template.bind({});
Avatar.args = {
  className: "avatar",
  url: "https://avatars.githubusercontent.com/u/1365?v=4",
};