let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
let tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

const notyf = new Notyf({
 position :{
   x: 'right',
  y: 'top'}
});

const wish = document.querySelectorAll('.wish')
const addCart = document.querySelectorAll('.add-cart')

wish.forEach(el => {
  el.addEventListener('click', ()=> {
    notyf.success("l'article a été ajouter a votre wishlist");
  })
})



addCart.forEach(el => {
  el.addEventListener('click', () => {
    notyf.success("l'article a été ajouter a votre panier");
  })
})
