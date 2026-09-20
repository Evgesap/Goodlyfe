const BURGER_BODY_FIXED = "body-fixed";
const BURGER_BTN_CLOSE_CLASSNAME = "burger__btn-close";
const BURGER_OPEN_SIDE_CLASSNAME = "burger__open";
const BURGER_CONTENT_CLASSNAME = "burger__content";

const burgerSideNode = document.querySelector(".burger");
const burgerBtnNode = document.querySelector(".burger__btn-open");
const bodyNode = document.querySelector("body");

burgerBtnNode.addEventListener("click", () => {
  (burgerActive(), buttonOpenActive());
});

// burgerSideNode.addEventListener("click", function (event) {
//   const clickedInsideContent = event
//     .composedPath()
//     .includes(BURGER_CONTENT_CLASSNAME);

//   if (!clickedInsideContent) {
//     (buttonOpenActive(), burgerActive());
//   }
// });

function burgerActive() {
  burgerSideNode.classList.toggle(BURGER_OPEN_SIDE_CLASSNAME);
  bodyNode.classList.toggle(BURGER_BODY_FIXED);
}

function buttonOpenActive() {
  if (burgerSideNode.classList.contains("burger__open")) {
    burgerBtnNode.classList.remove("burger__btn-open");
    burgerBtnNode.classList.add(BURGER_BTN_CLOSE_CLASSNAME);
  } else {
    burgerBtnNode.classList.add("burger__btn-open");
    burgerBtnNode.classList.remove(BURGER_BTN_CLOSE_CLASSNAME);
  }
}
