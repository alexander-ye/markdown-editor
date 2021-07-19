import React, { useState } from 'react';
import Editor from './editor';
import Output from './output'

const EditorContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
};

const EditorContainer = () => {

    const [markdownText, setMarkdownText] = useState('');

    const markdownState = {
        markdownText,
        setMarkdownText
    };

    return (
        <div style={EditorContainerStyle} value={markdownState}>
            <Editor text={markdownText} setText={setMarkdownText}/>
            <Output text={markdownText}/>
        </div>
    ) 
};

export default EditorContainer;