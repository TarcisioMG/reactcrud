import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.get('http://localhost:4000/employee/delete/'+this.props.obj._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.last_name}
          </td>
          <td>
            {this.props.obj.position}
          </td>
          <td>
            {this.props.obj.birth}
          </td>
          <td>
            {this.props.obj.salary}
          </td>
          <td>
            {this.props.obj.position_description}
          </td>
          <td>
            <button className="btn btn-primary">Editar</button>
          </td>
          <td>
            <button className="btn btn-danger">Apagar</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;