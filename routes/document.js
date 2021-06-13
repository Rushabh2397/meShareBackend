const express = require('express');
const router = express.Router();
const DocController = require('../controllers/document')

router.post('/upload',DocController.addDocuments)

module.exports = router;
