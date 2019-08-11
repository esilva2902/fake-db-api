const mongoose = require('mongoose');

const { Employee } = require('../models/employee');

class DAOEmployee {
  static async getEmployees() {
    return Employee.find();
  }
  
  static async getEmployeeById(employeeId) {
    return Employee.aggregate([{
      $match: {
        employeeId: employeeId
      }
    }]);
  }

  static async getEmployeesByAgeRange(minAge, maxAge) {
    return Employee.aggregate([{
      $match: {
        $expr: {
          $and: [
            {
              $eq: ['$active', true]
            },
            {
              $gte: ['$age', minAge]
            }
          ]
        }
      }
    }]);
  }
}

module.exports = {
  DAOEmployee
};