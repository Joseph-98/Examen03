const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:Codigo', customerController.edit);
router.post('/update/:Codigo', customerController.update);
router.get('/delete/:Codigo', customerController.delete);

module.exports = router;
