const express = require('express');
const employeeRoutes = express.Router();

let Employee = require('./employee.model');

employeeRoutes.route('/add').post(function (req, res) {
  let employee = new Employee(req.body);
  employee.save()
    .then(employee => {
      res.status(200).json({'employee': 'employee in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

employeeRoutes.route('/').get(function (req, res) {
    Employee.find(function(err, employees){
    if(err){
      console.log(err);
    }
    else {
      res.json(employees);
    }
  });
});

employeeRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Employee.findById(id, function (err, employee){
      res.json(employee);
  });
});

//  Defined update route
employeeRoutes.route('/update/:id').post(function (req, res) {
    Employee.findById(req.params.id, function(err, employee) {
    if (!employee)
      res.status(404).send("data is not found");
    else {
        employeeRoutes.name = req.body.name;
        employee.last_name = req.body.last_name;
        employee.position = req.body.position;
        employee.birth = req.body.birth;
        employee.salary = req.body.salary;
        employee.position_description = req.body.position_description;

        employee.save().then(employee => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
employeeRoutes.route('/delete/:id').get(function (req, res) {
    Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = employeeRoutes;