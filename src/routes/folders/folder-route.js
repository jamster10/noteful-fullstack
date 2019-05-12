'use strict';

const express = require('express');
const FolderService = require('./folder-service');

const folderRouter = express.Router();








folderRouter
  .get('/', (req, res, next) => {
    FolderService.getNotes(db)
  });




