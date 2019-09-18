import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import NoteListItem from './NoteListItem';


if (Meteor.isClient) {
    describe('NoteListItem', function () {
        it('should render title and timestamp', function () {
            const title = 'My title here';
            const updatedAt = 1568811383912;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe(title);
            expect(wrapper.find('p').text()).toBe('9/18/19');
        });

        it('should set default title if no title set', function () {
            const title = '';
            const updatedAt = 1568811383912;
            const wrapper = mount( <NoteListItem note={{ title, updatedAt}}/>);

            expect(wrapper.find('h5').text()).toBe('Untitled note');
            expect(wrapper.find('p').text()).toBe('9/18/19');

        })
    });
}