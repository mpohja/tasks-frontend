import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';
import { UnorderedList, ListItem } from 'evergreen-ui';

const USER_TASKS = loader('../../graphql/queries/getTasksByUser.graphql');
const USER = loader('../../graphql/queries/user.graphql');

const Tasks = () => {
  const {
    data: {
      user: { _id },
    },
  } = useQuery(USER);
  const { data, error } = useQuery(USER_TASKS, { variables: { id: _id } });
  if (error) return `Error! ${error.message}`;

  return (
    <UnorderedList>
      {data.getTasksByUser.map(task => (
        <ListItem key={task._id}>
          {task.title}, {task.status}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Tasks;
