export class Translator {
  constructor() {
    this.button = document.querySelector('#btn-translate')
    if (!this.button) return

    this.lang = 'es' // initial language of the page
    this.dictionary = this.getDictionary()
    this.textNodes = document.querySelectorAll('[data-key]')

    this.toggleLang = this.toggleLang.bind(this)
    this.button.addEventListener('click', this.toggleLang)
  }

  getDictionary() {
    return {
      en: {
        'intro-1': 'Una Imagen Bot is a generative software to create text-based images.',
        'intro-2': 'It is conceived as a tool to explore one’s own visual landscape within a digital environment increasingly shaped by hyper-produced imagery and algorithmic logics that dictate what is or isn’t seen.',
        'intro-3': 'Una Imagen Bot operates as an exercise in counter-imagination, opening space for thinking new ways of representing the real.',
        'extra-1': 'Once activated, the program runs autonomously and can take different forms depending on the context.',
        'extra-2': 'Between 2020 and 2023, it powered a <a target="_blank" class="underline" href="https://twitter.com/unaimagenbot">Twitter bot</a>  that posted these image proposals on a regular basis. The bot stopped operating after the platform became X.',
        'extra-3': 'In 2021, the project was featured at <a target="_blank" class="underline" href="https://www.instagram.com/loomfestival/">Loom Festival</a> through a social media intervention. The text-based generated images were shared through stories as a gesture of returning agency over visual production to users through their own imaginaries.'
      },
      es: {
        'intro-1': 'Una Imagen Bot es un programa generativo que produce imágenes posibles en forma de texto.',
        'intro-2': 'Es concebido como una herramienta para explorar el paisaje visual propio ante un contexto digital cada vez más mediado por imágenes hiper-producidas y lógicas algorítmicas que determinan lo que debe o no debe ser visto.',
        'intro-3': 'Una Imagen Bot es un ejercicio de contra-imaginación que invita a imaginar nuevas representaciones posibles de lo real.',
        'extra-1': 'El programa genera las imágenes de forma autónoma y puede adoptar distintas formas según el contexto en el que se active.',
        'extra-2': 'Entre 2020 y 2023, se utilizó para alimentar a un bot en <a target="_blank" class="underline" href="https://twitter.com/unaimagenbot">Twitter</a> que publicaba periódicamente las imágenes. Tras convertirse en X, el bot dejó de funcionar en esta plataforma.',
        'extra-3': 'En 2021 se presentó el proyecto en <a target="_blank" class="underline" href="https://www.instagram.com/loomfestival/">Loom Festival</a> a través de una acción en sus redes sociales. Las imágenes en forma de texto generadas por el programa fueron compartidas mediante stories como un gesto de devolver a los usuarios/espectadores la agencia sobre la producción de lo visible a través de sus propios imaginarios.'
      }
    }
  }

  toggleLang() {
    this.lang = this.lang === 'es' ? 'en' : 'es'
    const nextLang = this.lang === 'es' ? 'en' : 'es'
    this.button.textContent = `(${nextLang.toUpperCase()})`

    this.textNodes.forEach(node => {
      const key = node.dataset.key
      const translation = this.dictionary[this.lang][key]
      if (translation) node.innerHTML = translation
    })
  }
}
