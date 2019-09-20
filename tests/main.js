import assert from "assert";
//import './item.test';
//Server tests

import '../imports/api/users.test';
import '../imports/api/notes.test';

import '../imports/ui/PrivateHeader.test';
import '../imports/ui/Login.test';
import '../imports/ui/Signup.test';
import '../imports/ui/NoteListItem.test';
import '../imports/ui/NoteListHeader.test';
import '../imports/ui/NoteList.test';
describe("Test App", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "Notes");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
    

  }
});


