export function handleHeaderFooterVisibility() {
  const footer = document.querySelector('.c-footer')
  const header = document.querySelector('.c-hdr')
  if (!footer || !header) return

  const show = () => {
    footer.style.opacity = '1'
    header.style.opacity = '1'
  }

  const hide = () => {
    footer.style.opacity = '0'
    header.style.opacity = '0'
  }

  footer.addEventListener('mouseenter', show)
  footer.addEventListener('mouseleave', hide)
  header.addEventListener('mouseenter', show)
  header.addEventListener('mouseleave', hide)
}
