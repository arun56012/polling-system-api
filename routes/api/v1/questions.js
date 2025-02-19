const express = require('express');
const Router = express.Router();
const questionController = require('../../../controller/QuestionsController');

Router.post('/create',questionController.create);
Router.get('/view/:id',questionController.showDetails);
Router.delete('/delete/:id',questionController.deleteQues);
Router.use('/options',require('./options'))


module.exports = Router;
