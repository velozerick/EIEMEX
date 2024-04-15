
  function mostrarTexto() {
    var texto = document.getElementById("nosotrostxt");
    if (texto.style.opacity === "0") {
      texto.style.display = "block";
      texto.style.transition = "opacity 2s";
      texto.style.opacity = "1";
    } else {
      texto.style.opacity = "0";
      setTimeout(function() {
        texto.style.display = "none";
      }, 2000);
    }
  }


  const rocketImage = document.getElementById('rocket-image');
const rocketInfo = document.getElementById('rocket-info');

rocketImage.addEventListener('click', () => {
  rocketInfo.style.display = 'block';
  const listItems = rocketInfo.querySelectorAll('.rocket-info-item');
  let delay = 0;
  listItems.forEach((item) => {
    setTimeout(() => {
      item.classList.add('fade-in');
    }, delay);
    delay += 500;
  });
});


const rocketImages = document.querySelectorAll('.rocket-image');
const rocketInfos = document.querySelectorAll('.rocket-info');

rocketImages.forEach((rocketImage, index) => {
  rocketImage.addEventListener('click', () => {
    rocketInfos[index].style.display = 'block';
    const listItems = rocketInfos[index].querySelectorAll('.rocket-info-item');
    let delay = 0;
    listItems.forEach((item) => {
      setTimeout(() => {
        item.classList.add('fade-in');
      }, delay);
      delay += 500;
    });
  });
});