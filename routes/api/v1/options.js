const express = require('express');
const Router = express.Router();
const optionsController = require('../../../controller/OptionsController');

// ✅ Remove extra ':id' because it's already captured in `questions.js`
// Router.post('/:questionId/create',optionsController.create);

Router.post('/:id/create', optionsController.create);
Router.get('/:id/add_vote',optionsController.add_vote);
Router.delete('/delete/:id',optionsController.delete);

module.exports = Router;
