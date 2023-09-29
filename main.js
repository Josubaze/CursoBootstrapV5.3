const btn_buys = document.querySelector('#btn-buys');

btn_buys.addEventListener('click', buy_tickets);

function buy_tickets(e){
  const modal_body = e.target.parentElement.parentElement;
  const alert = modal_body.querySelector('.alert');
  alert.classList.remove('inactive');
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})