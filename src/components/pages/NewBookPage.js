import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SearchBookForm from '../forms/SearchBookForm';


class NewBookPage extends React.Component {
    state = {
        book: null
    }

    submit = data =>
        this.props.login(data).then(() => this.props.history.push('/dashboard'))

    render() {
        return (
            <div>
                <Segment>
                    <h1>Add new book to your collection</h1>
                    <SearchBookForm />
                </Segment>
            </div>
        );
    };
};

// NewBookPage.propTypes = {
//     history: PropTypes.shape({
//         push: PropTypes.func.isRequired
//     }).isRequired,
//     login: PropTypes.func.isRequired
// }

// First argument in connect is data you need in props
// functions to provide
export default connect(null)(NewBookPage);