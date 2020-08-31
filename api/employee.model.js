const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Employee = new Schema({
  name: {
    type: String
  },
  last_name: {
    type: String
  },
  position: {
    type: String
  },
  birth: {
    type: String
  },
  salary: {
    type: String
  },
  position_description: {
    type: String
  }
},{
    collection: 'employee'
});

module.exports = mongoose.model('Employee', Employee);
