/* 
  TODO: when the page first loads,
  set the selected number value to 3 and generate
  3 random color boxes. 
  
  To work with the CSS that is already writeen,
  these should be represented as an ul of li, like this: 

  <ul> 
    <li></li>
    <li></li>
    <li></li>
  </ul>

  Then, allow the user to change the number in the text field
  and once the button is pressed, auto-generate that many color
  boxes and display them on the screen. 

  Make sure to delete the old palette that was there before adding
  the new palette - there should only be one color palette on the screen
  at a time.
*/

function randomColor() {
  // use rgb() color mode
  // statement end with semi-colons, not necessary if the only statement in a line
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  // use JS template string to inject variables into a String
  let colorValue = `rgb(${r} ${g} ${b})`;
  return colorValue;
}

document.querySelector("#one").style.backgroundColor = randomColor();
document.querySelector("#two").style.backgroundColor = randomColor();
document.querySelector("#three").style.backgroundColor = randomColor();

document.querySelector("#generate").addEventListener("click", () => {
  let numColors = document.getElementById("nColors").value;
  console.log("Colors " + numColors);
  document.querySelector("#Colors").replaceChildren();

  for (let i = 0; i < numColors; i++) {
    console.log("i: " + i);
    let instance = document.createElement("li");
    let color = randomColor();
    console.log("color " + color);
    instance.style.backgroundColor = color;
    document.querySelector("#Colors").appendChild(instance);
  }
});
