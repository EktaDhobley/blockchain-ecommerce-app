const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://ed560:<password>@cluster0.1qyrpim.mongodb.net/',
    {userNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};