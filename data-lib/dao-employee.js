const mongoose = require('mongoose');

const { Employee } = require('../models/employee');

class DAOEmployee {
  static async getEmployees(pageNumber, pageSize) {
    console.log(`pageNumber: ${pageNumber} - pageSize: ${pageSize}`);
    return Employee.aggregate([{
      $skip: parseInt((pageNumber - 1) * pageSize)
    }, {
      $limit: parseInt(pageSize)
    }]);
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