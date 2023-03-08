var express = require('express');
var router = express.Router;

const db = require('../../utils/database');

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const results = await db.query(`select * from card_47`);
    // console.log('json data', JSON.stringify(results.rows));
    // console.log('results',results.rows);
    //   res.render('card2_47/index', { data: results.rows, name: 'Cindy Chen' ,id:'207410647' });
    res.json(results.rows);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
