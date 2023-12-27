import React from 'react'
import Card from './Card';

const All = ({task, setTask}) => {
  return (
    <>     
          {task.map((e, i) => {
            return <Card data={task} task={e} setTask={setTask} key={i}  />;
        })}
       
    </>
  )
}

export default All