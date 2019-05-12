'use strict';

const express = require('express');
const FoldersService = require('./folder-service');

const foldersRouter = express.Router();








foldersRouter
  .route('/')
  .get((req, res, next) => {
    const db = req.app.get('db');
    FoldersService.getNotes(db)
      .then(folders => res.status(200).json(folders))
      .catch(console.log);
  });



  
  module.exports = foldersRouter;



