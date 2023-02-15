// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {itemDetails, arrowFunction} = props
  const {suggestion} = itemDetails

  const onClickOfArrowImage = () => {
    arrowFunction(suggestion)
  }

  return (
    <li className="suggestion-list-item">
      <p className="suggestion-para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickOfArrowImage}
      />
    </li>
  )
}

export default SuggestionItem
