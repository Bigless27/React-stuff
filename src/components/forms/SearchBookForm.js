import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react';


class SearchBookForm extends React.Component {
    state = {
        query: '',
        loading: false,
        options: [],
        books: {}
    }

    onSearchChange = (e, data) => {
        clearTimeout(this.timer);
        this.setState({
            query: data
        });
        this.timer = setTimeout(this.fetchOptions, 1000)
    }

    fetchOptions = () => {
        if (!this.state.query) return;
        this.setState({ loading: true });
    }

    render() {
        return (
            <Form>
                <Dropdown
                    search
                    fluid
                    placeholder="Search for a book by titile"
                    value={this.state.query}
                    onSearchChange={this.onSearchChange}
                    options={this.state.options}
                    loading={this.state.loading}
                />
            </Form>
        )
    }
}

export default SearchBookForm;