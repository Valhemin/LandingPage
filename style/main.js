const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Popup
const getPopup = $('.popup')
const getbtnClose = $('.popup__box--right > .__close')
const getbtnEnroll = $$('a.section-courses__back--btn')

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
