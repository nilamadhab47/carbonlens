import anime from 'animejs'

export const animateCounter = (
  element: HTMLElement,
  targetValue: number,
  duration: number = 2000,
  suffix: string = '',
  prefix: string = ''
) => {
  const obj = { value: 0 }
  
  anime({
    targets: obj,
    value: targetValue,
    duration,
    easing: 'easeOutExpo',
    update: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`
    },
  })
}

export const animateParticles = (selector: string) => {
  const particles = document.querySelectorAll(selector)
  
  particles.forEach((particle, index) => {
    anime({
      targets: particle,
      translateX: () => anime.random(-100, 100),
      translateY: () => anime.random(-100, 100),
      scale: () => anime.random(0.5, 1.5),
      opacity: [0.3, 0.8, 0.3],
      duration: () => anime.random(3000, 6000),
      delay: index * 200,
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    })
  })
}

export const morphPath = (
  selector: string,
  paths: string[],
  duration: number = 3000
) => {
  let currentIndex = 0
  
  const animate = () => {
    const nextIndex = (currentIndex + 1) % paths.length
    
    anime({
      targets: selector,
      d: paths[nextIndex],
      duration,
      easing: 'easeInOutQuart',
      complete: () => {
        currentIndex = nextIndex
        setTimeout(animate, 1000)
      },
    })
  }
  
  animate()
}

export const pulseElement = (selector: string, scale: number = 1.1) => {
  anime({
    targets: selector,
    scale: [1, scale, 1],
    duration: 2000,
    loop: true,
    easing: 'easeInOutSine',
  })
}

export const createFloatingElements = (container: HTMLElement, count: number = 20) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div')
    particle.className = 'absolute w-1 h-1 bg-emerald-500/20 rounded-full'
    // Use deterministic positioning to avoid hydration issues
    particle.style.left = `${(i * 5.2) % 95 + 2.5}%`
    particle.style.top = `${(i * 7.3) % 90 + 5}%`
    container.appendChild(particle)
    
    anime({
      targets: particle,
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      scale: () => anime.random(0.5, 2),
      opacity: [0.2, 0.8, 0.2],
      duration: () => anime.random(4000, 8000),
      loop: true,
      direction: 'alternate',
      easing: 'easeInOutSine',
    })
  }
}
