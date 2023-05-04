import {Component} from 'react'

import './App.css'

import Multilingual from './Component/Multilingual'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].imageUrl,
    text: 'english',
  }

  onChangeLanguage = (imageUrl, text) => {
    this.setState({
      activeLanguage: imageUrl,
      text,
    })
    console.log(languageGreetingsList[imageUrl])
  }

  render() {
    const {activeLanguage, text} = this.state
    return (
      <div className="app-container">
        <h1 className="head">Multilingual Greetings</h1>
        <ul className="lang-container">
          {languageGreetingsList.map(each => (
            <Multilingual
              itemDetails={each}
              key={each.id}
              onClickLanguageTab={this.onChangeLanguage}
              isActive={text === each.imageAltText}
            />
          ))}
        </ul>
        <img src={activeLanguage} alt={text} className="image" />
      </div>
    )
  }
}

export default App
