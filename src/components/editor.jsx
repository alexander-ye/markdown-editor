import React from 'react';
import InputTextArea from './inputTextArea';

const EditorStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
};

const Editor = ({ text, setText }) => {


    return (
        <div style={EditorStyle}>
            <h2>Editor</h2>
            <InputTextArea text={text} setText={setText}/>
        </div>
    ) 
};

export default Editor;