import React from 'react';
import { Alert, Button } from 'react-bootstrap';

// redux part
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alert';

const Alerts = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => {
      const { id, msg, alertType } = alert;
      return (
        <Alert variant={`${alertType}`} key={id}>
          <p style={{ marginBottom: '0' }}>{msg}</p>
        </Alert>
      );
    })
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alerts);
