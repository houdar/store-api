const express = require ('express')
const router = express.Router()
const { getAllProucts , getAllProuctsTesting} = require ('../controllers/products')

//routes
router.route('/static').get(getAllProuctsTesting)

router.route ('/').get(getAllProucts)
 

module.exports = router