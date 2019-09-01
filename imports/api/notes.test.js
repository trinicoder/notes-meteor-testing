import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { Notes } from './notes';
if (Meteor.isServer) {
    describe('notes', function () {
        beforeEach(function () {
            Notes.remove({});
            Notes.insert({
                _id: 'testNoteId1',
                title: 'My Title',
                body: 'My body for note',
                udatedAt: 0,
                userId: 'testUserId1'
            })
        });
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

        it('should remove note', function () {
            Meteor.server.method_handlers['notes.remove'].apply({ userId: 'testUserId1' }, ['testNoteId1']);

            expect(Notes.findOne({ _id: 'testNoteId1'})).toNotExist();
        });

        it('should not remove note if unauthenticated', function () {
            expect(() => {
                Meteor.server.method_handlers['notes.remove'].apply({}, ['testNoteId1']);
            }).toThrow();
        });

        it('should not remove note if invalid _id', function () {
            expect( () => {
                Meteor.server.method_handlers['notes.remove'].apply({userId:'testUserId'}, []);
            }).toThrow()
        })
    });
}