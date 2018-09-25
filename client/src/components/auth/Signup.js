import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Passpord</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({ form: 'signup' })(Signup);
