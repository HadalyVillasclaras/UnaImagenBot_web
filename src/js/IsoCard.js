export class IsoCard {
  constructor() {
    this.fadeCard = document.querySelector('.s-iso-card.fade .c-card')
    this.textElement = this.fadeCard ? this.fadeCard.querySelector('.c-card__txt p') : null
    this.flipCard = document.querySelector('.s-iso-card.flip .c-card')
    this.frontText = this.flipCard ? this.flipCard.querySelector('.c-card__front .c-card__txt p') : null
    this.backText = this.flipCard ? this.flipCard.querySelector('.c-card__back .c-card__txt p') : null
    this.isFlipped = false
    this._flipTimer = null
    this.data = []
    this.dataIndex = 0

    this.init()
  }

  async init() {
    await this.loadData()
    if (this.textElement) this.updateText()
    if (this.fadeCard) this.fadeCard.addEventListener('click', () => this.handleInteraction())

    if (this.flipCard) {
      this.frontText.textContent = this.data[this.consumeIndex()];
      this.backText.textContent = this.data[this.consumeIndex()];
      this.flipCard.addEventListener('click', () => this.handleFlip());
      this.startAutoFlip();
    }
  }

  async loadData() {
    try {
      const res = await fetch('/images.json')
      this.data = await res.json()
    } catch (err) {
      console.error('Error loading JSON:', err)
    }
  }

  updateText() {
    const text = this.data[this.dataIndex % this.data.length]
    this.textElement.textContent = text
  }

  handleInteraction() {
    this.animateCard(() => {
      this.dataIndex = (this.dataIndex + 1) % this.data.length
      this.updateText()
    })
  }

  animateCard(onMidAnimation) {
    this.fadeCard.style.opacity = 0
    setTimeout(() => {
      onMidAnimation()
      this.fadeCard.style.opacity = 1
    }, 800)
  }

  consumeIndex() {
    const i = this.dataIndex % this.data.length
    this.dataIndex = (this.dataIndex + 1) % this.data.length
    return i
  }

  handleFlip() {
    this.isFlipped = !this.isFlipped

    if (this._flipTimer) clearTimeout(this._flipTimer)

    if (this.frontText) this.frontText.style.opacity = 0
    if (this.backText) this.backText.style.opacity = 0

    this.flipCard.classList.toggle('is-active', this.isFlipped)

    this._flipTimer = setTimeout(() => {
      const target = this.isFlipped ? this.backText : this.frontText
      if (target) {
        target.textContent = this.data[this.consumeIndex()]
        target.style.opacity = 1
      }
    }, 600)
  }

  startAutoFlip() {
    if (this._autoFlipInterval) clearInterval(this._autoFlipInterval)
    this._autoFlipInterval = setInterval(() => {
      this.handleFlip()
    }, 20000)
  }
}

