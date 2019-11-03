import React from 'react';

import PrivateHeader from './PrivateHeader';
import Editor from './Editor';
import NoteList from './NoteList';
export default () => {
    return (
      <div>
        <PrivateHeader title={"Dashboard"}/>
        <div className="page-content">            
            <div className="page-content__sidebar">
              <NoteList/>
            </div>
            
            <div className="page-content__main">
              <Editor/>
            </div>
         
        </div>        
      </div>
    );
}
