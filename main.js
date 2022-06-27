//display modal

window.onload = function() {
  setTimeout(() => {
    document.getElementById('overlay').style.display = 'block';
  }, 10000)
}

// display message on submit
document.getElementById('submit-btn').addEventListener('click', function(){
  document.querySelector('.overlay-precontent').style.display = 'none'
  document.querySelector('.overlay-postcontent').style.display = 'block'
})

// close modal
document.querySelector('.close-link').addEventListener('click', function(){
  document.getElementById('overlay').style.display = 'none'
})