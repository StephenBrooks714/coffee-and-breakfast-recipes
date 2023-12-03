let addFeature = document.getElementById("addFeature");
let featureList = document.querySelector(".featureList");
let featureDiv = document.querySelectorAll(".featureDiv")[0];

addFeature.addEventListener('click', function(){
    let newFeature = featureDiv.cloneNode(true);
    let input = newFeature.getElementsByTagName('input')[0];
    input.value = "";
    featureList.appendChild(newFeature)
})