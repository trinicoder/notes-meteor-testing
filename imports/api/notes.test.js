import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { Notes } from './notes';
if (Meteor.isServer) {
    describe('notes', function () {
        const userId = 'testid';
        it('should insert new note', function () {
            
            const _id= Meteor.server.method_handlers['notes.insert'].apply({userId: 'testid'});
            expect( Notes.findOne({_id, userId })).toExist();
        });

        it ('should not add note if unauthenticated', function () {
            expect(() => {
                Meteor.server.method_handlers['notes.insert']();
            }).toThrow();
        });
    });
}