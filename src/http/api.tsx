import { useEffect, useState } from 'react';

// child component
export const Child = ({ isCompleted }: any) => {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setComplete(isCompleted);
  }, [isCompleted]);

  return <>{complete ? <p>Tasks is complete</p> : <p>Task is not complete</p>}</>;
};

// parent component
export const Parent = () => {
  const data = [
    { task: 'task 01', isCompleted: true },
    { task: 'task 02', isCompleted: false },
  ];

  return (
    <>
      {data.map((task) => {
        return <Child isCompleted={task.isCompleted} />;
      })}
    </>
  );
};
