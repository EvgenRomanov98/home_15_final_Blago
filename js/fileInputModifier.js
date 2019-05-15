window.onload = function () {
    var fileInput1 = document.getElementById("account--payment"),
        fileInput2 = document.getElementById("medical--history"),
        fileInput3 = document.getElementById("birth--certificate"),
        fileInput4 = document.getElementById("passport"),
        fileInput5 = document.getElementById("ITN"),
        fileInput6 = document.getElementById("request--help"),
        fileInput7 = document.getElementById("financial-statements"),
        fileInput8 = document.getElementById("request--help3"),
        fileInput9 = document.getElementById("financial-statements3");

    // selectNeedHelpPage = document.getElementById("select-need-help-page"),
    // headerLabelNeedHelp = document.getElementById("header__label--need-help"),
    // mainSectionRight = document.getElementsByClassName("main__section--right");

    var pathFileList = document.getElementsByClassName("tc__p--input-file-value");

    var pathFile1 = pathFileList.item(0);
    var pathFile2 = pathFileList.item(1);
    var pathFile3 = pathFileList.item(2);
    var pathFile4 = pathFileList.item(3);
    var pathFile5 = pathFileList.item(4);
    var pathFile6 = pathFileList.item(5);
    var pathFile7 = pathFileList.item(6);
    var pathFile8 = pathFileList.item(7);
    var pathFile9 = pathFileList.item(8);

    // if (selectNeedHelpPage.checked) {
    //     headerLabelNeedHelp.style.color = "#24bb13";
    // } else {
    //     headerLabelNeedHelp.style.color = "#424242";
    // }

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

    fileInput6.addEventListener("change", function (event) {
        pathFile6.innerHTML = this.value;
    });

    fileInput7.addEventListener("change", function (event) {
        pathFile7.innerHTML = this.value;
    });
    fileInput8.addEventListener("change", function (event) {
        pathFile8.innerHTML = this.value;
    });
    fileInput9.addEventListener("change", function (event) {
        pathFile9.innerHTML = this.value;
    });
    // selectNeedHelpPage.addEventListener("change", function () {
    //     if (selectNeedHelpPage.checked) {
    //         headerLabelNeedHelp.style.color = "#24bb13";
    //     }
    //     if (selectNeedHelpPage.disabled){
    //         headerLabelNeedHelp.style.color = "#424242";
    //     }
    // });
    //
    // mainSectionRight[0].addEventListener("touchstart", function () {
    //     if (selectNeedHelpPage.checked) {
    //         headerLabelNeedHelp.style.color = "#24bb13";
    //     }
    //     if (selectNeedHelpPage.disabled){
    //         headerLabelNeedHelp.style.color = "#424242";
    //     }
    // });
};