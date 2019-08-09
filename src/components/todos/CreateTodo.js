import React, { Component } from 'react'

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChage={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default CreateTodo;
