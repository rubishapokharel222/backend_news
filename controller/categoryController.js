const db = require('../Conection')
// get:
module.exports.getCatagory = (req, res) => {
  const sqlget = `SELECT * FROM category ORDER BY category_id DESC`
  db.query(sqlget, (err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Data fetching failed',
        success: 'false',
        loading: 'true',
      })
    } else {
      return res.status(200).json({
        message: 'Data fetched successfully',
        success: 'true',
        loading: 'false',
        data: data,
      })
    }
  })
}

// post:
module.exports.postCategory = (req, res) => {
  // const values = {
  //   category_name: req.body.category_name,
  //   show_in_menu: req.body.show_in_menu,
  // }
  const values = req.body
  const sqlpost = `INSERT INTO category SET ? `
  db.query(sqlpost, [values], (err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Data addition failed',
        success: 'false',
        loading: 'true',
      })
    } else {
      return res.status(200).json({
        message: 'Data added successfully',
        success: 'true',
        loading: 'false',
        data: data,
      })
    }
  })
}

// update:
// module.exports.editCategory = (req, res) => {
//   const values = {
//     category_name: req.body.category_name,
//     show_in_menu: req.body.show_in_menu,
//   }

//   const sqlpost = `UPDATE category SET ? WHERE category_id=${req.params.category_id} `
//   db.query(sqlpost, values, (err, data) => {
//     if (err) {
//       return res.status(400).json({
//         message: 'Data updation failed',
//         success: 'false',
//         loading: 'true',
//         err: err,
//       })
//     } else {
//       return res.status(200).json({
//         message: 'Data updated successfully',
//         success: 'true',
//         loading: 'false',
//         data: data,
//       })
//     }
//   })
// }
module.exports.editCategory = (req, res) => {
  const searchData =
    'SELECT * FROM category WHERE category_id=' + req.params.category_id
  db.query(searchData, (err, data) => {
    if (err) {
      return res.status(400).json({ message: 'Data not found' })
    } else {
      const previous_category_name = data[0].category_name
      const previous_show_in_menu = data[0].show_in_menu

      const values = [
        req.body.category_name || previous_category_name,
        req.body.show_in_menu || previous_show_in_menu,
        req.params.category_id,
      ]
      const sqlpost =
        ' UPDATE category SET category_name=?, show_in_menu=? WHERE category_id=? '
      db.query(sqlpost, values, (err, data) => {
        if (err) {
          return res.status(400).json({ message: 'Data not found' })
        } else {
          return res.status(200).json({ message: 'Data found', data: data })
        }
      })
    }
  })
}

// delete:
module.exports.deleteCategory = (req, res) => {
  const sqlpost =
    `DELETE FROM category WHERE category_id= ` + req.params.category_id
  db.query(sqlpost, (err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Data deletion failed',
        success: 'false',
        loading: 'true',
      })
    } else {
      return res.status(200).json({
        message: 'Data deleted successfully',
        success: 'true',
        loading: 'false',
        data: data,
      })
    }
  })
}

// getbyid api :
module.exports.getbyidCatagory = (req, res) => {
  const sqlget =
    `SELECT * FROM category WHERE category_id=` + req.params.category_id
  db.query(sqlget, (err, data) => {
    if (err) {
      return res.status(400).json({
        message: 'Data fetching failed',
        success: 'false',
        loading: 'true',
      })
    } else {
      return res.status(200).json({
        message: 'Data fetched successfully',
        success: 'true',
        loading: 'false',
        data: data,
      })
    }
  })
}
