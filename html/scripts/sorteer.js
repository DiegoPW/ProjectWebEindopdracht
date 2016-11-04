var sorteerButton = document.getElementById("sorteren");
var filterButton = document.getElementById("filter");

sorteerButton.addEventListener ("click",function(e){
//    var sourceElement = e.target;
//    var nextSibling = sourceElement.nextSibling;
//    console.log(nextSibling);
    document.getElementById("sorteerlijst").classList.toggle("hidden");
//    .classList.toggle("hidden");
});

filterButton.addEventListener ("click",function(e){
    document.getElementById("filterlijst").classList.toggle("hidden");
})