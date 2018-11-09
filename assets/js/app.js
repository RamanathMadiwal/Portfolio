/**
 * Created by ramanathmadiwal on 27/02/17.
 */
/*
 alert("hello");*/

// function isEven(num) {
//     if (num !== 0 && num%2===0) {
//         return alert("true");
//     } else {
//         return alert("false");
//     }
// }
// isEven(7);
// isEven(-20);

/*function factorial(num) {
 if (num === 0) {
 return alert("1");
 } else {
 return alert(num * factorial(num - 1));
 }
 }
 factorial(4);*/


/*function kebabToSnake(name){

 return alert(name.split("-").join("_"));
 }

 kebabToSnake("hello-world");*/


/*
 function singSong(){
 alert("Ya devi sarva bhuteshu shakti rupene samsthitha");
 }

 setInterval(singSong,2000);*/


/*var a=["a","b","c"];
 a.unshift("d");
 alert(a);

 a.shift();

 alert(a);*/

// var a=["a","b","c"];
//
// var r= a.slice(1,2);
//
// alert(r);

// var colors=["red","blue","Green","white"];
//
// colors.forEach(function(printcolors){
//     alert(printcolors);
// })


//printreverse
//[a,b,c,d]


//is uniform


// function isUniform(arraylist){
//         for(var i=0;i<=arraylist.size;i++){
//             if(Number(arraylist[i])-Number(arraylist[i])===0){
//                 return alert("Array list is uniform");
//             }else{
//                 return alert("Array list is uniform");
//             }
//         }
//
// }
// var o=[1,1,1,1];
// isUniform(o);
//
// function sumArray(arraylist){
//     var result="value";
//
//         for(var i=0;i<arraylist.size;i++){
//             result+=arraylist[i];
//         }
//         return alert(result);
//
// }
// var s=[1,2,3,4];
// sumArray(s);
//
// function numberWithMaximumValue(arraylist){
//     var result="value";
//         for(var i=0;i<arraylist.size;i++){
//             if(arraylist[i]<arraylist[i-1]){
//
//             }
//             result+=arraylist[i];
//         }
//         return alert(result);
//
// }
// var sa=[1,2,3,4];
// numberWithMaximumValue(sa);


// var movies=[
//     {title:"Batman Vs Superman",
//     hasWatched:true,
//     rating:3},
//     {title:"Civil War",
//      hasWatched:false,
//      rating:5},
//     {title:"John Wick",
//      hasWatched:true,
//      rating:4}
//     ]
//
//
//
// setInterval(function () {
//     var result = "You have";
//     movies.forEach(function (movies) {
//         if (movies.hasWatched) {
//             result += "watched";
//         } else {
//             result += "not watched";
//
//         }
//         result += "\"" + movies.title + "-" + movies.rating;
//         console.log(result);
//         result="you have";
//     })
// }, 2000);
// var pageCounter = 1;
// var dataButton = document.getElementById("button");
// // var dataButton=document.getElementsByClassName("mybutton");
// var animalContainer = document.getElementById("animalinfo");
//
//
// dataButton.addEventListener("click", function () {
//
//     var ourRequest = new XMLHttpRequest();
//     ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");
//
//     ourRequest.onload = function () {
//         if (ourRequest.status >= 200 && ourRequest.status < 400) {
//             var requestedData = JSON.parse(ourRequest.responseText);
//             console.log(ourRequest);
//             renderHTML(requestedData);
//         }
//     }
//     // ourRequest.onerror = function () {
//     //
//     //
//     //     alert("server is down");
//     // }
//     ourRequest.send();
//     pageCounter++;
//     if (pageCounter > 4) {
//         alert("There are no more data");
//
//     }
//
// })
// ;

// function renderHTML(data) {
//     var dataString = "";
//
//     for (var i = 0; i < data.length; i++) {
//         dataString += "<p>" + "The animal details are" + data[i].name + " " + data[i].species + "    ";
//         for (var j = 0; j < data[i].foods.likes.length; j++) {
//             dataString += data[i].foods.likes[j];
//         }
//
//         dataString += "And dislikes"
//
//         for (var j = 0; j < data[i].foods.dislikes.length; j++) {
//             dataString += data[i].foods.dislikes[j];
//         }
//
//
//         dataString += " " + ".</p>";
//     }
//
//     animalContainer.insertAdjacentHTML("beforeend", dataString);
//
// }




