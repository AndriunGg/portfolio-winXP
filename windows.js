//DOM

// //----------------------------------------------------------------------------------------------------------
// const ventana = document.getElementById("window")
// const ventanita = document.getElementById("ventanita")
// const icono = document.getElementById("icon")
// const closeicon = document.getElementById("closew")

// //State variables
// let EstaSeleccionado = false;
// let offsetX, offsetY;

// //mousedown-Initial location of the element in X and Y axis according to the viewport
// //clientX-returns the position in the x axis of the cursor according to the document
// //Offsetleft-returns the position according to the left edge of the window in the X axis according to the document
// //offsetX -returns the x value of the cursor according to the window


// ventanita.addEventListener("mousedown", (e) => {
//   EstaSeleccionado = true;
//   offsetX = e.clientX - ventana.offsetLeft;
//   offsetY = e.clientY - ventana.offsetTop;
//   ventana.style.cursor = "grabbing";

// });

// document.addEventListener("mousemove", (e) => {
//   if (!EstaSeleccionado) return

//   ventana.style.left = (e.clientX - offsetX) + "px"
//   ventana.style.top = (e.clientY - offsetY) + "px"
//   ventana.style.cursor = "grabbing"
// })

// document.addEventListener("mouseup", () => {
//   EstaSeleccionado = false;
//   ventana.style.cursor = "default"

// })

// closeicon.addEventListener("click", () => {
//   ventana.style.display = "none"
// })
// icono.addEventListener("dblclick", () => {
//   ventana.style.display = "block"
// })

//Clicking functionality
let grid_container = document.querySelector(".grid-container");

grid_container.addEventListener("click",(e)=>{
  const iconBtn = e.target.closest(".icon_btn");
  const txt = iconBtn.querySelector(".txt_icon");
  grid_container
    .querySelectorAll(".active")
    .forEach((el) => el.classList.remove("active"));
    txt.classList.add("active")
})
////////////////////////////////////////////////////////////////////////////////////////////////
class DraggableWindow {
  constructor(elementId) {
    this.element = document.getElementById(elementId);
    this.titleBar = this.element.querySelector(".titulo__ventana");
    this.closeBtn = this.element.querySelector("#closew");
    this.isSelected = false;
    this.offsetX = 0;
    this.offsetY = 0;

    this.init();
  }

  init() {
    this.titleBar.addEventListener("mousedown", (e) => this.startDrag(e));
    document.addEventListener("mousemove", (e) => this.drag(e));
    document.addEventListener("mouseup", () => this.stopDrag());
    this.closeBtn.addEventListener("click", () => this.close());

  }

  startDrag(e) {
    this.isSelected = true;
    this.offsetX = e.clientX - this.element.offsetLeft;
    this.offsetY = e.clientY - this.element.offsetTop;
    this.titleBar.style.cursor = "grabbing";
  }

  drag(e) {
    if (!this.isSelected) return;
    this.element.style.left = e.clientX - this.offsetX + "px";
    this.element.style.top = e.clientY - this.offsetY + "px";

  }

  stopDrag() {
    this.isSelected = false;
    this.titleBar.style.cursor = "default";
  }

  close() {
    this.element.style.display = "none";
  }
}

// Usage:
new DraggableWindow("window");

class Icon {
  constructor(elementId, ventana) {
    this.icon = document.getElementById(elementId);
    this.ventana = document.getElementById(ventana)

    this.init()
  }
  init() {
    this.icon.addEventListener("dblclick", () => this.open());
  }
  open() {
    this.ventana.style.display = "block";
  }
}


new Icon("about", "window");