
export function Head({ title, description = '' }) {
  document.title = `Food Commerce | ${title}`
  document.querySelector('[name=description')?.setAttribute('content', description)

  return null
}
