const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Popup
const getPopup = $('.popup')
const getbtnClose = $('.popup__box--right > .__close')
const getbtnEnroll = $$('a.section-courses__back--btn')
const getbtnNav = $('.nav__icon')
const getbgNav = $('.nav__background')

getbtnEnroll.forEach( function(btn) {
   btn.onclick = () => {
      getPopup.style.display = 'block'
   }
})
getPopup.onclick = () => {
   getPopup.style.display = 'none'
}
getbtnClose.onclick = () => {
   getPopup.style.display = 'none'
}

getbtnNav.onclick = () => {
   getbgNav.style.transform = 'scale(60)' 
   getbtnNav.onclick = () => {
      getbgNav.style.transform = 'scale(1)' 
   }
}