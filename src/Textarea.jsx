import { useState } from 'react';
import Warning from './Warning.jsx';

const Textarea = () => {
  const [text, setText] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState('');

  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes('<script>')) {
      setShowWarning(true);
      setWarningText('No script tag allowed!');
      newText = newText.replace('<script>', '');
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text here..."
        spellCheck={false}
      />
      {showWarning && (<Warning warningText={warningText} />)}
    </div>
  );
};

export default Textarea;