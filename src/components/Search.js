import React, { Component } from 'react';

class Search extends Component {
    state = { artisQuery: '' };

    updateArtistQuery = event => {
        this.setState({ artisQuery: event.target.value });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () => {
        this.props.searchArtist(this.state.artisQuery);
    }

    render() {
        return (
            <div>
            <input onChange={this.updateArtistQuery} onKeyPress={this.handleKeyPress} placeholder='Type here for search'/>
            <button onClick={this.searchArtist}>Search</button>
            </div>
        )
    }
}

export default Search;