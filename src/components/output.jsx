import React from 'react';
import OutputText from './outputText';
import ReactMarkdown from 'react-markdown';

const OutputStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
};

const Output = ({ text }) => {
    return (
        <div style={OutputStyle}>
            <h2>Output</h2>
            <OutputText text={text}/>
        </div>
    )
};

export default Output;