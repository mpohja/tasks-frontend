import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { loader } from 'graphql.macro';
import { useMutation } from 'react-apollo-hooks';
import { Checkbox, Spinner } from 'evergreen-ui';

const UPDATE_STATUS = loader('../../graphql/mutations/updateStatus.graphql');

const Task = ({ task: { _id, status, title } }) => {
  const [loading, setLoading] = useState(false);
  const useToggle = useMutation(UPDATE_STATUS, {
    variables: {
      id: _id,
      input: {
        status: status === 'NEW' ? 'DONE' : 'NEW',
      },
    },
  });

  const toggle = async () => {
    setLoading(true);
    await useToggle();
    setLoading(false);
  };

  return loading ? (
    <div>
      <Spinner size={16} display={'inline-block'} marginRight={'8px'} />
      <span style={{ fontSize: '12px', verticalAlign: 'super' }}>{title}</span>
    </div>
  ) : (
    <Checkbox label={title} checked={status === 'ACCEPTED'} indeterminate={status === 'DONE'} onChange={toggle} />
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['NEW', 'DONE', 'ACCEPTED']),
  }).isRequired,
};

export default Task;
