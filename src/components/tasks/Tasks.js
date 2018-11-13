import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { loader } from 'graphql.macro';

const ALL_TASKS = loader('../../graphql/queries/tasks.graphql');

const Tasks = () => {
  const { data, error } = useQuery(ALL_TASKS);
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.allTasks.map(task => (
        <li key={task._id}>
          {task.title}, {task.owner.email}
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
