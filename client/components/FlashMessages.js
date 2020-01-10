import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { removeFlashMessage } from '../actions/flashMessages';

class FlashMessages extends Component {
  removeAlert = (id) => {
    this.props.removeFlashMessage(id)
  }

  renderCard(msg){
    const alertType = classnames('alert', {
      'alert-dander': msg.type === 'error',
      'alert-success': msg.type === 'success',
    });

    return(
      <div key={msg.id} className={alertType} >
        <div className='d-flex justify-content-end'>
          <span className="font-weight-bold" style={{position: 'absolute', top: 3+'px'}} onClick={() => this.removeAlert(msg.id)}> X </span>
        </div>
        { msg.text }
      </div>
    )
  }

  render(){
    return(
      <div>
        {this.props.messages.map(message => this.renderCard(message))}
      </div>
    )
  }
}

FlashMessages.propTypes = {
    messages: PropTypes.array.isRequired,
    removeFlashMessage: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  }
}
export default connect(mapStateToProps, { removeFlashMessage })(FlashMessages);
