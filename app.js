const allCorner = document.querySelector("#allCorner");
const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");

const generatorValue = document.querySelector("#generatorValue");

const circle = document.querySelector("#circle");
const container = document.querySelector("#container");

circle.style.borderRadius = `${allCorner.value}px`

displayRadiusValue()

allCorner.addEventListener("input", function(){
    topLeft.value = allCorner.value;
    topRight.value = allCorner.value;
    bottomLeft.value = allCorner.value;
    bottomRight.value = allCorner.value;
    circle.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`
    displayRadiusValue()
})

topLeft.addEventListener("input",function(){
    circle.style.borderTopLeftRadius = `${topLeft.value}px`
    displayRadiusValue()
})
topRight.addEventListener("input",function(){
    circle.style.borderTopRightRadius = `${topRight.value}px`
    displayRadiusValue()
})
bottomLeft.addEventListener("input",function(){
    circle.style.borderBottomLeftRadius = `${bottomLeft.value}px`
    displayRadiusValue()
})
bottomRight.addEventListener("input",function(){
    circle.style.borderBottomRightRadius = `${bottomRight.value}px`
    displayRadiusValue()
})

function displayRadiusValue (){
    generatorValue.innerHTML = `<span class="property">border-radius<span><span class="points">:  </span><span class="value">${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px</span><span class="points">;</span>`

}







