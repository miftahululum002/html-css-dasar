const author = "by Miftahul Ulum";
const head = document.head;
var title = document.querySelector("title");
let titleText = title.innerHTML;
let newTitle = titleText + " - " + author;
document.title = newTitle;
