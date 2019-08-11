let { mongoose } = require('../db/mongoose');

let EmployeeSchema = new mongoose.Schema({
    employeeId: {
      type: String,
      required: true,
      trim: true,
      minlength: 32
    },
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        trim: true
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    secondLastName: {
      type: String,
      required: true,
      minlength: 2,
      trim: true
    },
    gender: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
      type: String,
      required: true,
      minlength: 8,
      trim: true
    },
    phoneNumber: {
      type: String
    },
    address: {
        type: mongoose.Schema.Types.Mixed,
        default: { },
        required: true
    },
    active: {
        type: Boolean,
        required: true
    }
});

let Employee = mongoose.fakeCompaniesDB_conn.model('Employee', EmployeeSchema, 'employees');

module.exports = { Employee };
