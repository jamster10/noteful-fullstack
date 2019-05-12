'use strict';

const express = require('express');
const NotesService = require('./note-service');

const notesRouter = express.Router();








notesRouter
  .route('/')
  .get((req, res, next) => {
    const db = req.app.get('db');
    NotesService.getNotes(db)
      .then(notes => res.status(200).json(notes))
      .catch(console.log);
  });


  module.exports = notesRouter;