'use strict';

const table = '';

module.exports = {
  getNotes(db){
    return db.select('*').from(table);
  },

  getNote(db, noteId){
    return db.select('*').from(table).first().where('id', noteId);
  },

  editNote(db, noteId, newNote){
    return db.update(table).where('id', noteId);
    //how to update in server
  },

  deleteNote(db, noteId){
    //how to delete a note
  }

};