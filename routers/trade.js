const express = require('express');
const router = express.Router();
const operation = require('../logic/operation')

router.post('/', async (req, res) => {
    let trade = req.body
    let result = await operation.execute(trade)
    res.send(result);
});

/*

simple post request:

{
    "user_id": 123123123,
    "op_type": "sell",
    "targer_symbol": "ETH",
    "amount": 0.45,
    "start_symbol": "ODA"
}

example response: 

{
    "status": 200,
    "message": "User 123123123 succesfully sold 0.45 unit of ETH",
    "error_code": 0
}

*/

module.exports = router;