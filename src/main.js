import './style.css'

function backToTop() {
  document.querySelector('.back-top_btn').addEventListener('click', () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
}

backToTop();
