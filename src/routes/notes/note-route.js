'use strict';

const table = '';

module.exports = {
  getNotes(db){
    return db.select('*').from(table);
  },

  getNote(db, noteId){
    return db.select('*').from(table).first().where('id', noteId);
  },

  addNote(db, noteId, newnote){
    return db.insert(newnote).into(table).returning('*').then(responseArray => responseArray[0]);
  },

  updateNote(db, noteId, updatednote){
    return db(table).where({noteId}).update(updatednote);
  },

  deleteNote(db, noteId){
    return db(table).where({noteId}).delete();
  }
};