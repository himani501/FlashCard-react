import React from 'react'
import FlashCards from './FlashCards'

function FlashCardList ({flashcards}) {
  return (
    <div className='card-grid'> 
      {flashcards.map(flashcard => {
        return <FlashCards flashcard = {flashcard} key = {flashcard.id} />
      })}
    </div>
  )
}

export default FlashCardList