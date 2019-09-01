import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PrivateHeader from './PrivateHeader';
    
Enzyme.configure({ adapter: new Adapter() });

if (Meteor.isClient) {
    describe('PrivateHeader', function () {
        it('should set button text to logout', function () {
            const wrapper = mount( <PrivateHeader title="Test title"/>);

            const buttonText = wrapper.find('button').text();
            expect(buttonText).toBe('Logout');
        });

        it('should should use title prop as h1 text', function () {
            const wrapper = mount( <PrivateHeader title="Test title"/>);

            const actualTitle = wrapper.find('h1').text();
            expect(actualTitle).toBe('Test title');
        });
    });//end describe
}//end Meteor.isClient