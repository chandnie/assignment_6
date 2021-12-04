const mongoose = require("mongoose");
mongoose.pluralize(null);

const WalletSchema = mongoose.Schema({
    BookId: {
        type: String
    },
    RegistrationID: {
        type: String
    },
    Amount: {
        type: Number
    },
    TransactionType: {
        type: String,
        default: "Deposit"
    },
    InsertedTime: {
        type: Date,
        default: Date.now
    },
    UpdatedTime: {
        type: Date,
        default: Date.now
    }
});

const WalletModel = mongoose.model("BookDetail", WalletSchema);

module.exports = WalletModel;
