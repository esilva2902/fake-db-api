const express = require('express');

const { CtlEmployee } = require('../controllers/ctl-employee');

class EmployeeRoutes {

  static getPaths() {
    let router = express.Router();

    router.route('/employees')
      .get(CtlEmployee.getEmployees);

    router.route('/employees/:employeeId')
      .get(CtlEmployee.getEmployeeById);

    router.route('/employees/age-range/:minage/:maxage')
      .get(CtlEmployee.getEmployeesByAgeRange);

    return router;
  }
}

module.exports = {
  EmployeeRoutes
};
