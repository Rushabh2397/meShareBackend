const express = require('express');
const router = express.Router();
const DocController = require('../controllers/document')
const isUserAuthenticated = require('../middlewares/isUserAuthenticated')
const isLoggedIn = require('../middlewares/isLoggedIn')

router.all('/api/*', isUserAuthenticated, isLoggedIn)

router.post('/api/upload',DocController.addDocuments)
router.post('/api/add/url',DocController.addUrl)
router.get('/api/get_images',DocController.getImages)
router.get('/api/get_docs',DocController.getDocs)
router.get('/api/get_urls',DocController.getUrl)

module.exports = router;
