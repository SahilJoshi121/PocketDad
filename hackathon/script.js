const btn = document.querySelector('.djbtn');
const dj = document.querySelector('#dj');

btn.addEventListener('click', function () {

  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      const joke = data.joke;
      dj.textContent = joke;
    })
});
