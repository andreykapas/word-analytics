const Textarea = () => {
  return (
    <textarea
      onChange={e => {
        console.log(e.target.value);
      }}
      className="textarea"
      placeholder="Enter your text here..."
      spellCheck={false}
    />
  );
};

export default Textarea;