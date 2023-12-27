import React from 'react'
import Card from './Card';

const Not_completed = ({task, setTask}) => {
    let find = task.filter((e) => e.isCompletion === false)
  return (
    <>     
          {find.map((e, i) => {
            return <Card data={task} task={e} setTask={setTask} key={i}  />;
        })}
       
    </>
  )
}

export default Not_completed