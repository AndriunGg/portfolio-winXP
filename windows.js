//DOM
const ventana = document.getElementById("window")
const ventanita = document.getElementById("ventanita")

//State variables
let EstaSeleccionado = false;
let offsetX, offsetY;

//mousedown-Initial location of the element in X and Y axis according to the viewport
//clientX-returns the position in the x axis of the cursor according to the document
//Offsetleft-returns the position according to the left edge of the window in the X axis according to the document
//offsetX -returns the x value of the cursor according to the window


ventanita.addEventListener("mousedown", (e) => {
  EstaSeleccionado = true;
  offsetX = e.clientX - ventana.offsetLeft;
  offsetY = e.clientY - ventana.offsetTop;
  ventana.style.cursor = "grabbing";

});


document.addEventListener("mousemove", (e) => {
    if (!EstaSeleccionado) return

    ventana.style.left = (e.clientX - offsetX) + "px"
    ventana.style.top = (e.clientY - offsetY) + "px"
    ventana.style.cursor = "grabbing"
})

document.addEventListener("mouseup", () => {
    EstaSeleccionado = false;
    ventana.style.cursor = "default"

})


