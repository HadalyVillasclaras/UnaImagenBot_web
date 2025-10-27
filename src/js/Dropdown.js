export class Dropdown {
  constructor() {
    this.wrapper = document.querySelector('.c-dropdown__txt')
    if (!this.wrapper) return

    this.extra = this.wrapper.querySelector('.c-dropdown__extra')
    this.button = document.querySelector('.c-dropdown__btn')
    this.isOpen = false

    this.toggle = this.toggle.bind(this)
    this.init()
  }

  init() {
    this.extra.style.maxHeight = '0px'
    this.extra.style.overflow = 'hidden'
    this.button.addEventListener('click', this.toggle)
  }

  toggle() {
    this.isOpen = !this.isOpen
    if (this.isOpen) {
      const fullHeight = this.extra.scrollHeight + 'px'
      this.extra.style.maxHeight = fullHeight
      this.button.textContent = '( - info )'
      this.button.setAttribute('aria-expanded', 'true')
    } else {
      this.extra.style.maxHeight = '0px'
      this.button.textContent = '( + info )'
      this.button.setAttribute('aria-expanded', 'false')
    }
  }
}
