import React, { useState, createContext, useContext } from 'react';
import "./styles.css";
import EditorContainer from './components/editorContainer';

function App() {

  const [markdownText, setMarkdownText] = useState('');

  return (
    <div className="AppContainer">
      <h1>Markdown Editor Built With React</h1>
      <EditorContainer/>
    </div>
    
  );
}

export default App;
