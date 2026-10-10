const revealDirective = {
  mounted(element, binding) {
    element.classList.add('scroll-reveal')

    if (binding.modifiers.left) element.classList.add('scroll-reveal-left')
    if (binding.modifiers.center) element.classList.add('scroll-reveal-center')
    if (binding.modifiers.right) element.classList.add('scroll-reveal-right')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      element.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
        } else {
          entry.target.classList.remove('is-revealed')
        }
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    })

    observer.observe(element)
    element.__scrollRevealObserver = observer
  },

  beforeUnmount(element) {
    element.__scrollRevealObserver?.disconnect()
    delete element.__scrollRevealObserver
  }
}

export default revealDirective
