import React,{useRef}from 'react';




const UncontrolledForm: React.FC = ( ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (inputRef.current) {
        console.log('Name:' + inputRef.current.value);
    }
    event.preventDefault();
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <h1>Uncontroled</h1>
        <label>
        Name
        <input type="text"  ref={inputRef} />
        </label>
        <button type="submit">Send</button>
        </form>
        );
        };
  
  export default UncontrolledForm;