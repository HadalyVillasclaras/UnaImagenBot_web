export class DeckSlider {
  constructor() {
    this.container = document.querySelector('.deck-slider')
    this.slides = this.container.querySelectorAll('.deck-slide')
    this.activeIndex = 0
    this.data = []
    this.dataIndex = 0
    this.activeSlide = this.slides[this.activeIndex]

    this.next = this.next.bind(this)
    this.updateSlides = this.updateSlides.bind(this)
    this.updateCardTexts = this.updateCardTexts.bind(this)

    this.init()
  }

  async init() {
    await this.loadData()
    this.updateCardTexts()
    this.updateSlides()
    this.container.addEventListener('click', this.next)
  }

  async loadData() {
    try {
      const res = await fetch('/images.json')
      this.data = await res.json()
    } catch (err) {
      console.error('Error loading JSON:', err)
    }
  }

  updateCardTexts() {
    this.slides.forEach((slide, i) => {
      const realIndex = (this.activeIndex + i) % this.slides.length
      const dataPos = (this.dataIndex + i) % this.data.length
      const text = this.data[dataPos]
      const textEl = this.slides[realIndex].querySelector('.c-card__txt p')
      if (textEl) textEl.textContent = text
    })
  }

  updateSlides() {
    this.activeSlide.classList.remove('active')
    this.activeSlide = this.slides[this.activeIndex]
    this.activeSlide.classList.add('active')

    let order = this.slides.length - this.activeIndex
    this.slides.forEach((slide, index) => {
      if (index === this.activeIndex) order = 0
      slide.setAttribute('data-order', order)
      slide.style.transitionDelay = order === this.slides.length - 1 ? '0ms' : ''
      order++
    })
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length
    this.dataIndex = (this.dataIndex + 1) % this.data.length
  
    this.updateCardTexts()
    this.updateSlides()
  }
}
