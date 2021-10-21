//  import React from 'react'
const tasks = [
  {
    id: 1,
    text: 'doctore appointment',
    day: 'Feb 5th at 2:40pm',
    reminder: true
  },
  {
    id: 2,
    text: 'meeting js',
    day: 'Oct 8th at 12:00am',
    reminder: true
  },

  {
    id: 3,
    text: 'food shopping',
    day: 'Oct 22 at 13:10pm ',
    reminder: false
  }
];

const Tasks = () => {
  return (
    <>
      {tasks.map(task => (
        <h1>{task.text}</h1>
      ))}
    </>
  );
};

export default Tasks;
