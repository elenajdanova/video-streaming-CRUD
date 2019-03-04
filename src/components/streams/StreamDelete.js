import React from 'react';
import Modal from '../Modal';
import history from '../../history';


const StreamDelete = () => {
  const actions = (
    //div with no css === <> </>
    <React.Fragment>
      <button className="ui button negative"> Delete </button>
      <button className="ui button"> Cancel </button>
    </React.Fragment>
  );
  return (
    <div>
    Delete Stream
     <Modal
      title="Delete stream"
      content="Are you sure you want to delete this stream?"
      actions= {actions}
      onDismiss={() => history.push('/')}
    />
    </div>
  );
};

export default StreamDelete;
