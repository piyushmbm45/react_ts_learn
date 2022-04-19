import React, { useState, useEffect } from 'react';

export const UseEffectHook: React.FC = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  return <div>Hello</div>;
};
