import React from 'react';
import PropTypes from 'prop-types';

const clickAction = () => {
    console.log('I am clicked');
}

const NewPage = ({message}) => (
    <div>
        <div>
            Display the message: { message }
        </div>
        <button onClick={clickAction}>
            bigButton
        </button>
    </div>
);

NewPage.propTypes = {
    message: PropTypes.string.isRequired
}


export default NewPage;