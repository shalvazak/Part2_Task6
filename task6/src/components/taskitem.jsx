import React, { useMemo } from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
    return useMemo(() => {
      console.log('Render TaskItem');
      return (
        <li>
            {task}
            <button onClick={onDelete}><i className="fa fa-trash"></i></button>
            {onComplete && <button onClick={onComplete}><i className="fa fa-check"></i></button>}
        </li>
      );
    }, [task, onComplete, onDelete]);
  };

export default TaskItem;