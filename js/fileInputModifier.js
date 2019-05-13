var fileInput1 = document.getElementById("account--payment"),
    fileInput2 = document.getElementById("medical--history"),
    fileInput3 = document.getElementById("birth--certificate"),
    fileInput4 = document.getElementById("passport"),
    fileInput5 = document.getElementById("ITN");

pathFileList = document.getElementsByClassName("tc__p--input-file-value");

var pathFile1 = pathFileList.item(0);
var pathFile2 = pathFileList.item(1);
var pathFile3 = pathFileList.item(2);
var pathFile4 = pathFileList.item(3);
var pathFile5 = pathFileList.item(4);

fileInput1.addEventListener("change", function (event) {
    pathFile1.innerHTML = this.value;
});

fileInput2.addEventListener("change", function (event) {
    pathFile2.innerHTML = this.value;
});

fileInput3.addEventListener("change", function (event) {
    pathFile3.innerHTML = this.value;
});

fileInput4.addEventListener("change", function (event) {
    pathFile4.innerHTML = this.value;
});

fileInput5.addEventListener("change", function (event) {
    pathFile5.innerHTML = this.value;
});


// var fileInputList = document.getElementsByClassName("input--file"),
//     pathFileList = document.querySelector("tc__p--input-file-value");
//
// console.log(fileInputList.length);
//
// for (var i = 0; i < fileInputList.length; i++) {
//     console.log(i);
//     fileInputList[i].addEventListener("change", function (event) {
//         console.log(i);
//         pathFileList[i].innerHTML = event.value;
//     });
// }
// fileInputList.forEach(function (item, i, fileInputList) {
//     console.log( i + ": " + item + " (массив:" + arr + ")" );
// });
// fileInput.addEventListener("change", function (event) {
//     debugger;
//     pathFile.innerHTML = this.value;
// });
