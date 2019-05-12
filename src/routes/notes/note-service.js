'use strict';

const table = 'notes';

module.exports = {
  getNotes(db){
    return db.select('*').from(table);
  },

  getNote(db, noteId){
    return db.select('*').from(table).first().where('id', noteId);
  },

  addNote(db, newNote){
    return db.insert(newNote).into(table)
  },

  updateNote(db, noteId, updatedNote){
    return db(table).where('id', noteId).update(updatedNote).returning('*').then(responseArray => responseArray[0]);
  },

  deleteNote(db, noteId){
    return db(table).where('id', noteId).delete();
  }

};