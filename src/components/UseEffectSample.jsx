import React, { useState, useEffect } from 'react';

export default function UseEffectSample(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API実行やイベント購読・解除などの副作用処理を記述
    console.log('--- useEffect ---');
    return () => {
      console.log('--- useEffect cleanup ---');
    };
  });

  return (
    <div>
      <button type="button" onClick={() => setCount(count + 1)}>
        更新
      </button>
      {count}
    </div>
  );
}
