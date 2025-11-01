import { ImageGenerator } from './ImageGenerator.js'

export class IsoCard {
  constructor() {
    this.fadeCard = document.querySelector('.s-iso-card.fade .c-card')
    this.textElement = this.fadeCard ? this.fadeCard.querySelector('.c-card__txt p') : null
    this.flipCard = document.querySelector('.s-iso-card.flip .c-card')
    this.frontText = this.flipCard ? this.flipCard.querySelector('.c-card__front .c-card__txt p') : null
    this.backText = this.flipCard ? this.flipCard.querySelector('.c-card__back .c-card__txt p') : null
    this.isFlipped = false
    this._flipTimer = null
    this._autoFlipInterval = null
    this.generator = new ImageGenerator()

    this.init()
  }

  async init() {
    await this.generator.ready

    if (this.fadeCard) {
      this.fadeCard.addEventListener('click', () => {
        this.handleInteraction()
        this.resetAutoFlip()
      })
    }

    if (this.flipCard) {
      this.flipCard.addEventListener('click', () => {
        this.handleFlip()
        this.resetAutoFlip()
      })
      this.startAutoFlip()
    }
  }

  async updateText() {
    this.textElement.textContent = await this.generator.getNext()
  }

  handleInteraction() {
    this.animateCard(async () => {
      this.textElement.textContent = await this.generator.getNext()
    })
  }

  animateCard(onMidAnimation) {
    this.fadeCard.style.opacity = 0
    setTimeout(() => {
      onMidAnimation()
      this.fadeCard.style.opacity = 1
    }, 800)
  }

  async handleFlip() {
    this.isFlipped = !this.isFlipped
    if (this._flipTimer) clearTimeout(this._flipTimer)

    if (this.frontText) this.frontText.style.opacity = 0
    if (this.backText) this.backText.style.opacity = 0

    this.flipCard.classList.toggle('is-active', this.isFlipped)

    this._flipTimer = setTimeout(async () => {
      const target = this.isFlipped ? this.backText : this.frontText
      if (target) {
        target.textContent = await this.generator.getNext()
        target.style.opacity = 1
      }
    }, 600)
  }

  startAutoFlip() {
    if (this._autoFlipInterval) clearInterval(this._autoFlipInterval)
    this._autoFlipInterval = setInterval(() => this.handleFlip(), 20000)
  }

  resetAutoFlip() {
    if (this._autoFlipInterval) clearInterval(this._autoFlipInterval)
    this.startAutoFlip()
  }
}
