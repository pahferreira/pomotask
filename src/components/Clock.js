import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const Clock = props => {
  return <Title style={{ fontSize: 5 + 'rem' }}>{props.children}</Title>;
};

export default Clock;
