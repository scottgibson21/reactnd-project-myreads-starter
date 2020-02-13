import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SearchOptions extends Component {

    static propTypes = {
        queryBooks: PropTypes.func.isRequired 
    }

    searchOptions = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

    handleSelectChange = (event) => {
        this.props.queryBooks(event.target.value)
    }

    render() {
        return (
            <select defaultValue='select' onChange={this.handleSelectChange}>
                <option value="select" disabled>Select a Category</option>
                {this.searchOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        )
    }

}

export default SearchOptions