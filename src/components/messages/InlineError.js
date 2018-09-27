import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({ text }) => (
    <div>
        <span style={{color: '#ae5856'}}>{text}</span>
    </div>
);

InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;