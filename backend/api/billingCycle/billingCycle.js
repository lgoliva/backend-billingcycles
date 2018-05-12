const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, riquered: true},
    value: {tyoe Number, min: 0, riquered: true}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, riquered: true},
    value: {type: Number, min: 0, riquered: true},
    status: { type: String, riquered: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, riquered: true},
    month: {type: Number, min: 1, max: 12, riquered: true},
    year: {type: Number, min: 1970, max: 2100, riquered: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BiliingCycle', billingCycleSchemar)
