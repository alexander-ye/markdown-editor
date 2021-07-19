import React from 'react';
import ReactMarkdown from 'react-markdown';

const OutputTextStyle = {
    witdh: '100%',
    height: '100%',
    fontSize: '16px',
};

const OutputText = ({ text }) => {
    const test = `# Hello`;

    return (
        <ReactMarkdown children={text}/>  
    )
};

export default OutputText