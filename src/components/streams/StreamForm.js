import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamForm extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    // return <input onChange={formProps.input.onChange} value={formProps.input.onChange.value}></input>   same way is below
    const errorStyling = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

    return (
      <div className={errorStyling}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};


export default reduxForm({
  form: 'streamForm',
  validate: validate
})(StreamForm); // same as connect function