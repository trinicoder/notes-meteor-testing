import React from 'react';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { createContainer }  from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Session } from 'meteor/session';


export const NoteListItem = (props) => {

  const className = props.note.selected ?'item item--selected' : 'item';

  return (
    <div className={className} onClick={() => {
      props.Session.set('selectedNoteId', props.note._id);
    }}>
      <h5 classNAme="item__title" >{ props.note.title || 'Untitled note' }</h5>
      <p className="item__subtitle">{ moment(props.note.updatedAt).format('M/DD/YY') }</p>
    </div>
  );
};

NoteListItem.propTypes= {
    note: PropTypes.object.isRequired,
    Session: PropTypes.object.isRequired
  };
  
export default createContainer(() => {
  return { Session };
}, NoteListItem);