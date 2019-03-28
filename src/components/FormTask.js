import React from "react";
import { Form, Input, Button } from "antd";

const validatorInput = text => {
  return text.length === 0;
};

const FormTask = props => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Item>
        <Input syze="small" allowClear onChange={props.onChange} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" disabled={validatorInput(props.taskInput)}>
          Add task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTask;
