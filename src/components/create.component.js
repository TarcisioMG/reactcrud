import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
      super(props);
      this.onChangeName = this.onChangeName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangePosition = this.onChangePosition.bind(this);
      this.onChangeBirth = this.onChangeBirth.bind(this);
      this.onChangeSalary = this.onChangeSalary.bind(this);
      this.onChangePositionDescription = this.onChangePositionDescription.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
          name: '',
          last_name: '',
          position:'',
          birth: '',
          salary: '',
          position_description: ''
      }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      last_name: e.target.value
    })  
  }
  onChangePosition(e) {
    this.setState({
      position: e.target.value
    })
  }
  onChangeBirth(e) {
    this.setState({
      birth: e.target.value
    })
  }
  onChangeSalary(e) {
    this.setState({
      salary: e.target.value
    })
  }
  onChangePositionDescription(e) {
    this.setState({
      position_description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.name}, ${this.state.last_name}, ${this.state.position}, 
      ${this.state.birth}, ${this.state.salary} and ${this.state.position_description}`)
    this.setState({
      name: '',
      last_name: '',
      position:'',
      birth: '',
      salary: '',
      position_description: ''
    })
  }
 
  render() {
      return (
          <div style={{ marginTop: 10 }}>
              <h3>Cadastrar Novo Funcionário</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label>Nome:  </label>
                      <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Sobrenome: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        />
                  </div>
                  <div className="form-group">
                      <label>Cargo: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.position}
                        onChange={this.onChangePosition}
                        />
                  </div>
                  <div className="form-group">
                      <label>Data de Nascimento: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.birth}
                        onChange={this.onChangeBirth}
                        />
                  </div>
                  <div className="form-group">
                      <label>Salário: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.salary}
                        onChange={this.onChangeSalary}
                        />
                  </div>
                  <div className="form-group">
                      <label>Descrição do Cargo: </label>
                      <input type="text" 
                        className="form-control"
                        value={this.state.position_description}
                        onChange={this.onChangePositionDescription}
                        />
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Salvar" className="btn btn-primary"/>
                  </div>
              </form>
          </div>
      )
  }
}