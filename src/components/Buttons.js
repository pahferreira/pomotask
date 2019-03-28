import React from "react";
import { Button, Row, Icon } from "antd";
import { useAlert } from "react-alert";

function Buttons(props) {
  const alert = useAlert();
  return (
    <Row type="flex" justify="center">
      <Button
        onClick={() => {
          if (props.clockIsRunning) {
            alert.show("Clock is already running!");
          } else {
            props.clockStart();
          }
        }}
      >
        <Icon type="caret-right" />
      </Button>
      <Button onClick={props.clockStop}>
        <Icon type="pause" />
      </Button>
      <Button onClick={props.setRest}>
        <Icon type="clock-circle" />
      </Button>
      <Button type="danger" onClick={props.clockReset}>
        <Icon type="reload" />
      </Button>
    </Row>
  );
}

export default Buttons;
