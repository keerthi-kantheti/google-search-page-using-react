// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeOfSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickOfArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const reqList = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="suggestions-container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />

            <input
              type="search"
              placeholder="Search Google"
              className="input1"
              value={searchInput}
              onChange={this.onChangeOfSearchInput}
            />
          </div>
          <ul>
            {reqList.map(eachItem => (
              <SuggestionItem
                itemDetails={eachItem}
                key={eachItem.id}
                arrowFunction={this.onClickOfArrow}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
