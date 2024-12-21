import React, { useState } from 'react';

const ControlledForm: React.FC = () => {

  const [text, setText] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('option1');

 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', { text, isChecked, selectedOption });
    alert(`Submitted Data:\nText: ${text}\nChecked: ${isChecked}\nOption: ${selectedOption}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Controled</h1>
      <div>
        <label htmlFor="textInput">Text Input:</label>
        <input
          id="textInput"
          type="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="checkbox">Checkbox:</label>
        <input
          id="checkbox"
          type="checkbox"
          checked={isChecked}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsChecked(e.target.checked)}
        />
      </div>
      <div>
        <label htmlFor="select">Select Option:</label>
        <select
          id="select"
          value={selectedOption}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedOption(e.target.value)}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
