let express = require('express');
let router = express.Router();
let db = require(`../models/planete.model.js`);


const planete_controller = require('../controllers/planete.controller');

router.get('/',planete_controller.planete_home);
router.post('/create',planete_controller.planete_create);
router.get('/list',planete_controller.planete_list);
router.put('/update',planete_controller.planete_update);
router.delete('/delete',planete_controller.planete_delete);
router.get('/coucou',planete_controller.planete_coucou);

module.exports = router;