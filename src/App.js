import React, { useState, useEffect } from 'react'
import './App.css'
import FlashCardList from './components/FlashCardList'
import axios from 'axios'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then(
      res => {
        setCards(res.data.results.map( (item, index) => {
          return {
            id: index,
            question: decodeString(item.question),
            answer: item.correct_answer,
            options: [...item.incorrect_answers, item.correct_answer]
          }
        }))
      }
    )
  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  return (
    <FlashCardList flashcards = {cards} />
  )
}

const sampleCards = [
  {
    id: 1,
    question: 'what is 3 + 3 ?',
    answer: '6',
    options: ['2', '4', '8', '6']
  },
  {
    id: 2,
    question: 'what is 4 + 4 ?',
    answer: '8',
    options: ['2', '4', '8', '9']
  },
  {
    id: 1,
    question: 'what is 6 * 6 ?',
    answer: '36',
    options: ['2', '36', '5', '9']
  }
]

export default App
