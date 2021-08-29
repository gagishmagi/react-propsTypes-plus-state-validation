import React, { Component } from "react";
import propTypes from 'prop-types'

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fields: [
            {class: "is-valid"},
            {class: 'not-valid'}
        ],
        errors: (props.location.state) ?  props.location.state.errors : []
    };
  }

  saveFName = (e) => {
    this.setState({ fname: e.target.value });
  };

  getFormData = (e) => {
    e.preventDefault();
    console.log("HELLO FROM CLASS");
  };

  sendToServer = () => {
    console.log(this.props)



    if (!this.state.fname) {
      this.setState({ result: "NO FIRST NAME" });
    }
    if(this._isItYuri()){
        this.setState({ result: "It's not Yuri" });    
    }
  };

  _isItYuri(){
    // return (this.state.fname && !this.state.fname.match(/yuri/i))
    return (this.state.fname && !(/yuri/i.test(this.state.fname)))
  }


  render() {
    return (
      <div>
        {this.state.fname}
        <div className="invalid">
            {this.state.result}
            {this.state.errors}
        </div>
        <form noValidate onSubmit={this.getFormData}>
          <label>
            ID:
            <input type="number" placeholder="ID NUMBER" required />
          </label>

          <label>
            First Name:
            <input
              type="text"
              placeholder="First Name"
              onChange={this.saveFName}
            />
          </label>

          <label>
            LAST Name:
            <input type="text" placeholder="Last Name" />
          </label>

          <button className="is-valid" onClick={this.sendToServer}> SEND </button>
        </form>
      </div>
    );
  }
}


Forms.propTypes = {
    location: function(props, propName ){
        if(props[propName] !== propTypes.object) {
            console.log(props)
            if(props.location && props.location.state){
                const errors = props.location.state =  {}
                errors.errors = []
                errors.errors.push(<div>something is wrong with your url</div>)
                errors.errors.push(<div>something is wrong with your url</div>)

            }

            console.log(props)

            return new Error("something is wrong with your url")
        }
    }
}



export default Forms;
