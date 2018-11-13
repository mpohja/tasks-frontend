import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';
import { UnorderedList, ListItem } from 'evergreen-ui';

const ALL_TASKS = loader('../../graphql/queries/tasks.graphql');

const Tasks = () => {
  const { data, error } = useQuery(ALL_TASKS);
  if (error) return `Error! ${error.message}`;

  return (
    <UnorderedList>
      {data.allTasks.map(task => (
        <ListItem key={task._id}>
          {task.title}, {task.owner.email}
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Tasks;
