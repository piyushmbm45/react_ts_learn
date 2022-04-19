import React, { useState, useRef } from 'react';

interface Person {
  fisrtName: string;
  lastName: string;
}

interface Props {
  text: string;
  person: Person;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Dimension {
  height: number;
  width: number;
}

export const TextField: React.FC<Props> = ({ text, person, handleChange }) => {
  const [count, setCount] = useState(5);
  const [value, setValue] = useState<Dimension>({ height: 0, width: 0 });
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef);

  function handleClick() {
    setValue({ height: 200, width: 400 });
  }

  return (
    <div>
      <h1>{text}</h1>
      <h2>{person.fisrtName}</h2>
      <h3>{person.lastName}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <p>
        {value.height} {value.width}
      </p>
      <button onClick={handleClick}>Change Size</button>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};
