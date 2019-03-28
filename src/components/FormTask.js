import React from "react";
import { Form, Input, Button } from "antd";

function FormTask(props) {
  return (
    <Form onSubmit={props.onSubmit}>
      <Form.Item>
        <Input syze="small" allowClear onChange={props.onChange} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">Add task</Button>
      </Form.Item>
    </Form>
  );
}

const WrappedForm = Form.create({ name: "form_task" })(FormTask);

export default WrappedForm;
