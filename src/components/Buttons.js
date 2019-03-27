import React from "react";
import { Button, Row } from "antd";
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
        Play
      </Button>
      <Button onClick={props.clockStop}>Pause</Button>
      <Button onClick={props.setRest}>Rest</Button>
      <Button type="danger" onClick={props.clockReset}>
        Reset
      </Button>
    </Row>
  );
}

export default Buttons;
