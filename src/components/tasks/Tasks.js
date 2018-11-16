import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';
import { UnorderedList, ListItem } from 'evergreen-ui';

const USER_TASKS = loader('../../graphql/queries/getTasksByUser.graphql');
const USER = loader('../../graphql/queries/user.graphql');

const getItemProps = status => {
  switch (status) {
    case 'NEW':
      return {
        icon: 'issue',
        iconColor: 'danger',
      };
    case 'ACCEPTED':
      return {
        icon: 'tick-circle',
        iconColor: 'success',
      };
    case 'DONE':
      return {
        icon: 'issue-closed',
        iconColor: 'info',
      };
  }
};

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
        <ListItem key={task._id} {...getItemProps(task.status)}>
          {task.title}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Tasks;
