import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoteListHeader from './NoteListHeader';
Enzyme.configure({ adapter: new Adapter() });
if (Meteor.isClient) {
    describe('NoteListHeader', function () {
        it('should call meteorCall on click', function () {
            const spy = expect.createSpy();
            const wrapper = mount(<NoteListHeader meteorCall={spy}/>);
      
            wrapper.find('button').simulate('click');
      
            expect(spy).toHaveBeenCalledWith('notes.insert');
        });
    });//describe
}//Meteor isClient