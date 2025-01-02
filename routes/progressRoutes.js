const express = require('express');
const ProgressController = require('../controllers/ProgressController');
const router = express.Router();

router.get('/', ProgressController.getAllProgress);
router.get('/:id', ProgressController.getProgressById);
router.post('/', ProgressController.createProgress);
router.put('/:id', ProgressController.updateProgress);
router.delete('/:id', ProgressController.deleteProgress);

module.exports = router;