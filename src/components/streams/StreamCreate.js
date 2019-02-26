import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
  renderInput(formProps) {
    // return <input onChange={formProps.input.onChange}
    //               value={formProps.input.onChange.value}></input>   same way is below

    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter title"/>
        <Field name="description" component={this.renderInput} label="Enter description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
};

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate); // same as connect function
