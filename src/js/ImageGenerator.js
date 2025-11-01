export class ImageGenerator {
  constructor() {
    this.data = []
    this.ready = this.loadData()
    this.recent = []
    this.recentLimit = 20
  }

  async loadData() {
    try {
      const res = await fetch('/images.json', { cache: 'no-store' })
      this.data = await res.json()
    } catch (err) {
      console.error('Error loading JSON:', err)
    }
  }

  async getNext() {
    await this.ready
    if (!this.data.length) return ''

    let text = ''
    let tries = 0
    do {
      const i = Math.floor(Math.random() * this.data.length)
      text = this.data[i]
      tries++
      if (tries > 50) break
    } while (this.recent.includes(text))

    this.recent.push(text)
    if (this.recent.length > this.recentLimit) this.recent.shift()

    return text
  }
}
