const mongoose = require("mongoose");
mongoose.pluralize(null);

const RegistrationSchema = mongoose.Schema({
    RegistrationID: {
        type: String
    },
    Name: {
        type: String
    },
    EmailID: {
        type: String
    },
    MobileNo: {
        type: String
    },
    DOB: Date,
});

const RegistrationModel = mongoose.model("RegistrationDetail", RegistrationSchema);

module.exports = RegistrationModel;