export class GridTextRevealer {
  constructor() {
    this.container = document.querySelector('.cards-grid')
    this.cards = Array.from(this.container.querySelectorAll('.c-card'))
    this.data = []
    this.dataIndex = 0
    this.activeCard = null

    this.handleCardClick = this.handleCardClick.bind(this)
    this.revealText = this.revealText.bind(this)
    this.hideText = this.hideText.bind(this)

    this.init()
  }

  async init() {
    await this.loadData()
    this.cards.forEach(card => {
      const textEl = card.querySelector('.c-card__txt p')
      if (textEl) textEl.textContent = ''
      card.addEventListener('click', () => this.handleCardClick(card))
    })
  }

  async loadData() {
    try {
      const res = await fetch('/images.json')
      this.data = await res.json()
      console.log('✅ Loaded JSON:', this.data)
    } catch (err) {
      console.error('Error loading JSON:', err)
    }
  }

  handleCardClick(card) {
    if (this.activeCard === card) return
    if (this.activeCard) this.hideText(this.activeCard)
    this.revealText(card)
    this.activeCard = card
  }

  revealText(card) {
    const textEl = card.querySelector('.c-card__txt p')
    const text = this.data[this.dataIndex]
    if (textEl) textEl.textContent = text
    card.classList.add('is-active')

    this.dataIndex = (this.dataIndex + 1) % this.data.length
    console.log(`🪄 Revealed: "${text}" at index ${this.dataIndex}`)
  }

  hideText(card) {
    const textEl = card.querySelector('.c-card__txt p')
    if (textEl) textEl.textContent = ''
    card.classList.remove('is-active')
  }
}
