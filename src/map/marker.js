import React from 'react';
import './marker.css';

const Marker = (props: any) => {
    console.log(props.any)
    const { color, name, id } = props;
    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}
        title={name}
      />
    );
  };

  export default Marker;