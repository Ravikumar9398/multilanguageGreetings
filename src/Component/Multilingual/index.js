import './index.css'

const Multilingual = props => {
  const {itemDetails, onClickLanguageTab, isActive} = props
  const {buttonText, imageUrl, imageAltText} = itemDetails
  const onClickButton = () => {
    onClickLanguageTab(imageUrl, imageAltText)
  }

  const activeBtn = isActive ? 'active-btn' : ''
  return (
    <li className="item">
      <button
        type="button"
        onClick={onClickButton}
        className={`button ${activeBtn}`}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Multilingual
