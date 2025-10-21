console.log("conectau")


const ventana= document.getElementById("window")


let EstaSeleccionado = false;


let offsetX, offsetY;


//mousedown- Almacena la ubicacion inicial del elememto en X y Y

//clientX devuelve la posicion en x del cursor  con respecto a todo el html

//Offsetleft nos da el valor segun la posicion segun la esquina izquierda de la ventana en el eje X con respecto al documento

//offsetX nos da el valor donde se ubica el click en el eje x segun la ventana


ventana.addEventListener("mousedown", (e)=>{
    EstaSeleccionado = true;
    offsetX= e.clientX - ventana.offsetLeft
    offsetY= e.clientY - ventana.offsetTop
    ventana.style.cursor = "grabbing"

    console.log("resta",e.offsetX)
})


document.addEventListener("mousemove", (e)=>{
    if (!EstaSeleccionado) return 

    ventana.style.left = (e.clientX - offsetX) + "px"

    console.log(ventana.style.left)
    ventana.style.top = (e.clientY - offsetY) + "px"
    ventana.style.cursor = "grabbing"

        console.log(e.clientX)  
})

document.addEventListener("mouseup", ()=>{
    EstaSeleccionado = false;
    ventana.style.cursor = "default"

})


