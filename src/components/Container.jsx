import Textarea from './Textarea.jsx';
import Stats from './Stats.jsx';
import { useState } from 'react';

const Container = () => {
  const [text, setText] = useState('');
  const stats = {
    numberOfChars: text.length,
    numberOfWords: text.split(
      /\s/).filter((word) => word !== '').length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;