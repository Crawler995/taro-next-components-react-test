import React from 'react';
import './style.scss';

interface IProps {
  componentsName: string;
  children: React.ReactNode;
}

function ComponentsContainer(props: IProps) {
  return (
    <div className="components-container">
      <h3>{ props.componentsName }</h3>
      <div>
        { props.children }
      </div>
    </div>
  );
}

export default ComponentsContainer;
