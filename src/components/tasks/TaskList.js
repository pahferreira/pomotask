import React from 'react';
import { List, Typography } from 'antd';

const TaskList = props => {
  const taskList = props.taskList;
  const { Text } = Typography;
  return taskList.length === 0 ? (
    <Text>Your task list is empty.</Text>
  ) : (
    <List
      itemLayout="horizontal"
      dataSource={taskList}
      renderItem={task => (
        <List.Item actions={[<a>delete</a>, <a>done</a>]}>
          <List.Item.Meta description={task} />
        </List.Item>
      )}
    />
  );
};

export default TaskList;
