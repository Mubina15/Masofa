let elForm = document.querySelector(".form");
let elTextInput = document.querySelector(".text__input");
let elSpan = document.querySelector(".watch");
let carSpeed = 70;
let elSpan2 = document.querySelector(".people")
let peopleSpeed = 3.6;
let elSpan3 = document.querySelector(".velo")
let veloSpeed =  20.1;
let elSpan4 = document.querySelector(".plane")
let planeSpeed = 800;
let elPlanen = document.querySelector(".planen")
let elPlanes = document.querySelector(".planes")
let elUsern = document.querySelector(".usern")
let elVelon = document.querySelector(".velon")
let elVelos = document.querySelector(".velos")
let elCarn = document.querySelector(".carn")
let elCar = document.querySelector(".car")
let elPassInput = document.querySelector(".pass__input");
let elUser = document.querySelector(".user");
let elPass = document.querySelector(".pass");
let elButton = document.querySelector("button")


let elBody = document.querySelector("body");
let elCheck = document.querySelector(".check");
let elLabel = document.querySelector(".label");

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
  
    if (!isNaN(elTextInput.value)) {
      let vaqt = Math.floor(elTextInput.value / carSpeed);

      let minut = Math.ceil((elTextInput.value / carSpeed - vaqt) * 60).toFixed(0) ;
        
      elSpan.textContent = `${vaqt} h  ${minut} m`;
    }
    if (!isNaN(elTextInput.value)) {
      let vaqtp = Math.floor(elTextInput.value / peopleSpeed);

      let minutc = Math.ceil((elTextInput.value / peopleSpeed - vaqtp) * 60).toFixed(0) ;
        
      elSpan2.textContent = `${vaqtp} h  ${minutc} m`;
    }
    if (!isNaN(elTextInput.value)) {
      let vaqtv = Math.floor(elTextInput.value / veloSpeed);

      let minutv = Math.ceil((elTextInput.value / veloSpeed - vaqtv) * 60).toFixed(0) ;
        
      elSpan3.textContent = `${vaqtv} h ${minutv} m`;
    }
    if (!isNaN(elTextInput.value)) {
      let vaqtc = Math.floor(elTextInput.value / planeSpeed);

      let minutp = Math.ceil((elTextInput.value / planeSpeed - vaqtc) * 60).toFixed(0) ;
        
      elSpan4.textContent = `${vaqtc} h ${minutp} m`;
    }
    else {
      alert("Ma'lumotni tekshiring!!!");
    }
  });

  elCheck.addEventListener("change", function(evt) {
    if (evt.target.checked === false) {
        elBody.classList.add("togle")
        elBody.classList.remove("togle")
        elLabel.textContent = "Light"
        elUser.style = 'color:black;'
        elSpan4.style = 'color:black;'
        elSpan3.style = 'color:black;'
        elCar.style = 'color:black;'
        elCarn.style = 'color:black;'
        elVelon.style = 'color:black;'
        elUsern.style = 'color:black;'
        elPlanen.style = 'color:black;'
        elPlanes.style = 'color:black;'
        elVelos.style = 'color:black;'
        elTextInput.style = 'color:white; background:black;'
        elButton.style = 'color:white; background:grey;'
    } else {
        elBody.classList.remove("togle")
        elBody.classList.add("togle") 
        elLabel.textContent = "Dark"
        elUser.style = 'color:white;'
        elSpan4.style = 'color:white;'
        elSpan3.style = 'color:white;'
        elCar.style = 'color:white;'
        elCarn.style = 'color:white;'
        elVelon.style = 'color:white;'
        elUsern.style = 'color:white;'
        elPlanen.style = 'color:white;'
        elPlanes.style = 'color:white;'
        elVelos.style = 'color:white;'
        elTextInput.style = 'color:black; background:white;'
        elButton.style = 'color:grey; background:white;'
    }
})