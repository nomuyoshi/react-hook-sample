import React from 'react';
import UseStateSample from './UseStateSample';
import UseEffectSample from './UseEffectSample';

export default function App() {

  return (
    <div>
      <h2>useState Sample</h2>
      <UseStateSample />
      <h2>useEffect Sample</h2>
      <UseEffectSample />
    </div>
  );
}
