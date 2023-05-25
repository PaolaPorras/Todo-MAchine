import React from 'react';
import { TodoIcon } from './';

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? '#D14D72' : '#FCC8D1'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };    