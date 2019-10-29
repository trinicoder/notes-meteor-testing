import React from 'react';

import PrivateHeader from './PrivateHeader';
import Editor from './Editor';
import NoteList from './NoteList';
export default () => {
    return (
      <div>
        <PrivateHeader title={"Dashboard"}/>
        <div className="page-content">            

          <NoteList/>
          <Editor/>
          </div>        
      </div>
    );
}
