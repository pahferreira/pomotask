import React from 'react';
import { Row, Col } from 'antd';

const Clock = (props) => {
  return (
    <Row>
      <Col>
        <h1 style={{fontSize: 5 + 'rem'}}>{props.children}</h1>
      </Col>
    </Row>
  )
}

export default Clock;