const Wallet = require('../models/wallet')

const OP_LIST = ["BUY", "SELL"]

module.exports = {

    async execute(trade) {
        let status = 200, error_code = 0, message = ""

        if (!this.isValid(trade)) {
            status = 201
            error_code = 1
            return this.buildReturn(status, message, error_code)
        }

        // DO SHIT LOGIC MY BRO

        message = `User ${trade.user_id} succesfully ${trade.op_type == 'buy' ? 'buyed' : 'sold'} ${trade.amount} unit of ${trade.targer_symbol}`

        return this.buildReturn(status, message, error_code)
    },










    buildReturn(status, message, error_code) {
        return { "status": status, "message": message, "error_code": error_code }
    },

    isValid(trade) {
        let ret = true
        ret = this.isNumber(trade.user_id)
        ret = OP_LIST.includes(trade.op_type.toUpperCase())
        ret = this.isString(trade.targer_symbol)
        ret = this.isNumber(trade.amount)
        ret = this.isString(trade.start_symbol)
        return ret
    },

    isNumber(n) {
        return (typeof n === 'number' && isFinite(n)) || (Object.prototype.toString.apply(n) === '[object Number]');
    },

    isString(s) {
        return typeof s === 'string' || s instanceof String
    }

}