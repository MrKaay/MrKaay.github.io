import React from 'react';

const Fieldset = ({ legend, className, children }) => {
  return (
    <fieldset className={className}>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

export default Fieldset;
