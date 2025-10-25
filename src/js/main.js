import './../styles/main.scss'
import { DeckSlider } from './DeckSlider'
import { GridTextRevealer } from './GridTextRevealer'
import { IsoCard } from './IsoCard';
import { handleHeaderFooterVisibility } from './helpers.js';

document.addEventListener('DOMContentLoaded', () => {
  const filename = window.location.pathname.split('/').pop()

  if (filename === 'screen.html' || filename === 'screen') {
    new IsoCard();
    handleHeaderFooterVisibility()
  } else {
    new DeckSlider()
    new GridTextRevealer()
    new IsoCard()
  }
})
