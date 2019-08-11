const { DAOEmployee } = require('../data-lib/dao-employee');

class CtlEmployee {

  static async getEmployees(req, res) {
      try {
          let employees = await DAOEmployee.getEmployees();

          res.send(employees);

      } catch(e) {
          res.status(500).send(e.message);
      }
  }

  static async getEmployeeById(req, res) {
      try {
          let employeeId = req.params.employeeId;

          let [ employee ] = await DAOEmployee.getEmployeeById(employeeId);
          res.send(employee);

      } catch(e) {
          res.status(500).send(e.message);
      }
  }

  static async getEmployeesByAgeRange(req, res) {
    try {
        let minAge = req.params.minage;
        let maxAge = req.params.maxage;

        let employees = await DAOEmployee.getEmployeesByAgeRange(minAge, maxAge);
        res.send(employees);

    } catch(e) {
        res.status(500).send(e.message);
    }
  }

  // static async addCompany(req, res) {
  //     try {
  //         let companyName = req.body.companyName;
  //         let ruc = req.body.ruc;
                      
  //         let company = await DAOCompany.insertCompany(companyName, ruc);

  //         res.send(company);

  //     } catch(e) {
  //         res.status(500).send(e.message);
  //     }
  // }

  // static async updateCompany(req, res) {
  //     try {
  //         let companyId = req.params.companyId;
  //         let logo = req.body.logo;
  //         let addres = {
  //             street: req.body.street,
  //             externalNumber: req.body.externalNumber,
  //             internalNumber: req.body.internalNumber ? req.body.internalNumber : '',
  //             suburb: req.body.suburb,
  //             city: req.body.city,
  //             state: req.body.state,
  //             country: req.body.country,
  //         }
                      
  //         let company = await DAOCompany.updateCompany(companyId, logo, addres);

  //         res.send(company);

  //     } catch(e) {
  //         res.status(500).send(e.message);
  //     }
  // }
}

module.exports = {
    CtlEmployee
};
