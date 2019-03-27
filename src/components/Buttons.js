import React from "react";
import { Button } from "antd";
import { useAlert } from "react-alert";

function Buttons(props) {
  const alert = useAlert();
  return (
    <>
      <Button
        onClick={() => {
          if (props.clockIsRunning) {
            alert.show("Clock is already running!");
          } else {
            props.clockStart();
          }
        }}
      >
        Work!
      </Button>
      <Button onClick={props.clockStop}>Pause</Button>
      <Button type="danger" onClick={props.clockReset}>
        Reset
      </Button>
    </>
  );
}

export default Buttons;
