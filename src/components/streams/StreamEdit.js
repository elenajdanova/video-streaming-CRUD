import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id); // component isolation rule for React Router
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div> // first time component is rendered stream is undefined
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={
            { title: this.props.stream.title,
              description: this.props.stream.description }
          }
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream:state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
