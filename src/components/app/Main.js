import React, { Suspense } from 'react';
import { Heading, Pane, Spinner } from 'evergreen-ui';
import Tasks from '../tasks/Tasks';

const Main = () => (
  <Pane padding={16}>
    <Heading>Tasks</Heading>
    <Suspense fallback={<Spinner />}>
      <Tasks />
    </Suspense>
  </Pane>
);

export default Main;
