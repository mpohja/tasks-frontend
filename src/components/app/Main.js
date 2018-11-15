import React, { Suspense } from 'react';
import { Heading, Pane } from 'evergreen-ui';
import Tasks from '../tasks/Tasks';

const Main = () => (
  <Pane padding={16}>
    <Heading>Tasks</Heading>
    <Suspense fallback={<div>Loading...</div>}>
      <Tasks />
    </Suspense>
  </Pane>
);

export default Main;
