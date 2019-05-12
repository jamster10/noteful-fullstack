'use strict';

const table = 'folders';

module.exports = {
  getNotes(db){
    return db.select('*').from(table);
  },

  getNote(db, folderId){
    return db.select('*').from(table).first().where('id', folderId);
  },

  addNote(db, folderId, newFolder){
    return db.insert(newFolder).into(table).returning('*').then(responseArray => responseArray[0]);
  },

  updateNote(db, folderId, updatedFolder){
    db(table).where('folder_id', folderId).update(updatedFolder);
  },

  deleteNote(db, folderId){
    db(table).where('folder_id', folderId).delete();
  }
};