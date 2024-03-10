function diceRoll(){
    let random = Math.ceil(Math.random() * 6);
  let roll = document.getElementById("rollPicture");
  roll.innerHTML = "<img src='images/" + random + ".jpg'/>";
}