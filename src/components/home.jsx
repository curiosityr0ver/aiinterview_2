import React, { useState } from 'react';
import styles from "./home.module.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAnswerClick = () => {
    console.log('Answer:', inputValue);
    // Add your answer handling logic here
  };

  const handleSkipClick = () => {
    console.log('Question skipped');
    setInputValue('');
    // Add your skip handling logic here
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>AI Interview</h2>
      <input 
        className={styles.input}
        type="text" 
        value={transcript} 
        onChange={handleInputChange} 
        placeholder="Type your answer here"
      />
      <div style={{display:"flex", marginLeft:'30%'}}>
      <button className={styles.answer} onClick={SpeechRecognition.startListening}>Answer</button>
      <button className={styles.stop} onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className={styles.skip} onClick={handleSkipClick}>Skip</button>
      {/* <p>{transcript}</p> */}
      </div>
    </div>
  );
};

export default Home;
