import Textarea from './Textarea.jsx';
import Stats from './Stats.jsx';
import { useState } from 'react';

const Container = () => {
  const [text, setText] = useState('');
  const numberOfChars = text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats numberOfChars={numberOfChars} />
    </main>
  );
};

export default Container;