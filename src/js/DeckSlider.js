import { ImageGenerator } from './ImageGenerator.js'

export class DeckSlider {
  constructor() {
    this.container = document.querySelector('.deck-slider')
    this.slides = this.container.querySelectorAll('.deck-slide')
    this.activeIndex = 0
    this.activeSlide = this.slides[this.activeIndex]
    this.generator = new ImageGenerator()

    this.next = this.next.bind(this)
    this.updateSlides = this.updateSlides.bind(this)
    this.fillSlides = this.fillSlides.bind(this)

    this.init()
  }

  async init() {
    await this.generator.ready
    this.updateSlides()
    this.container.addEventListener('click', this.next)
  }

  async fillSlides() {
    for (let i = 0; i < this.slides.length; i++) {
      const textEl = this.slides[i].querySelector('.c-card__txt p')
      if (textEl) textEl.textContent = await this.generator.getNext()
    }
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

  async next() {
    this.activeIndex = (this.activeIndex + 1) % this.slides.length
    await this.fillSlides()
    this.updateSlides()
  }
}
