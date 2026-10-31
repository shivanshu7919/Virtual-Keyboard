import React, { useEffect, useRef } from 'react'

function TextArea({ inputText, setInputText }) {

  const textareaRef = useRef(null);

  useEffect(() => {
    // 1. Focus the textarea automatically when the page loads
    textareaRef.current.focus();

    const keepFocus = (e) => {
      // 2. Check if the user clicked outside the textarea
      if (textareaRef.current && !textareaRef.current.contains(e.target)) {
        // 3. Stop the browser from moving focus away
        e.preventDefault();

        // 4. Double-check focus remains locked in place
        textareaRef.current.focus();
      }
    };

    // Use 'mousedown' to catch the click before the browser triggers a blur event
    document.addEventListener('mousedown', keepFocus);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', keepFocus);
    };
  }, []);


  return (
    <div className='flex justify-center'>
      <textarea
        type="text"
        ref={textareaRef}
        className='w-1/2 border-2 rounded-2xl py-5 px-5 m-10'
        placeholder='Enter Text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </div>
  )
}

export default TextArea
