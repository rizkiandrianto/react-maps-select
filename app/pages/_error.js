import React from 'react';
import PropTypes from 'prop-types';

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = () => {
      if (err) {
        return err.statusCode;
      }

      if (res) {
        return res.statusCode;
      }

      return null;
    };
    return { statusCode: statusCode() };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
};

Error.defaultProps = {
  statusCode: 0
};
