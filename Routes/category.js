const { Router } = require('express')
const categoryController = require('../controller/categoryController')
const router = Router()

router.get('/api/get/category', categoryController.getCatagory)
router.post('/api/post/category', categoryController.postCategory)
router.put('/api/edit/category/:category_id', categoryController.editCategory)
router.delete(
  '/api/delete/category/:category_id',
  categoryController.deleteCategory,
)
router.get('/api/getbyid/category/:category_id', categoryController.getbyidCatagory)

module.exports = router
