import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';
import { UnorderedList, ListItem } from 'evergreen-ui';

const ALL_TASKS = loader('../../graphql/queries/allTasks.graphql');
const USER = loader('../../graphql/queries/user.graphql');

const Tasks = () => {
  const {
    data: {
      user: { role },
    },
  } = useQuery(USER);
  const { data, error } = useQuery(ALL_TASKS, { variables: { filter: '3' } });
  if (error) return `Error! ${error.message}`;

  return (
    <UnorderedList>
      {data.allTasks.map(task => (
        <ListItem key={task._id}>
          {task.title}, {task.owner.email} {role}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Tasks;
