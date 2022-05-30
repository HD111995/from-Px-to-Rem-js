let text;
let test = "font-size: 20px;";

//convert from px to rem usiong regex
function pxToRem(_s) {
  var reg = /(\:|)+(\d)+(px)/gi;
  let newStr = _s.replace(reg, function (_x) {
    _x = _x.replace(/(\:|: )/, "").replace(/px/i, "");

    return parseFloat(_x) / 100 + "rem";
  });
  return newStr;
}

//read text file and convert his value showing result in the conole
document.querySelector("#read-button").addEventListener("click", function () {
  let file = document.querySelector("#file-input").files[0];

  let reader = new FileReader();
  reader.addEventListener("load", function (e) {
    //console.log(reader.readAsDataURL(e.file));
    text = e.target.result;
    console.log(pxToRem(text));

    document.querySelector("#file-contents").textContent = pxToRem(text);
  });
  reader.readAsText(file);
});
