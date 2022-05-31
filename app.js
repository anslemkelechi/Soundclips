let mobile = document.querySelector('.mobile-nav')
let open = document.querySelector('.open')
let close = document.querySelector('.close')
let body = document.body
let mobBack = document.querySelector('.mob-back')

open.addEventListener('click', () => {
  mobile.classList.toggle('mobile-nav')
  open.classList.toggle('active')
  close.classList.toggle('active')
})
close.addEventListener('click', () => {
  mobile.classList.add('mobile-nav')
  open.classList.toggle('active')
  close.classList.toggle('active')
})

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mobBack.style.height = '10%'
    mobBack.style.transition = 'all 0.5s'
  } else {
    mobBack.style.height = '0%'
    mobBack.style.transition = 'all 0.5s'
  }
}
