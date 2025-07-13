function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("invalid-email");

  const checkMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const check = emailValue.match(checkMail);
  const infoContent = document.querySelector("#personal-info .info-content");
  console.log("check info", infoContent);

  const submitControl = document.querySelector(".submit-email");
  if (check) {
    infoContent.style.display = "block";
    submitControl.style.display = "none";
    errorEmail.innerHTML = "";
  } else {
    errorEmail.innerHTML = "Vui lòng nhập email chính xác";
  }
}

function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "inline-block";
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".control-view");
  viewMore.style.display = "none";
}
function handleViewMore(button) {
  const parentBox = button.closest(".job-box-grid");
  const content = parentBox.querySelector(".job-content");

  const isSoThich = parentBox.querySelector(".ic-telescope") !== null;

  if (button.classList.contains("view-more")) {
    content.style.display = "block";
    if (isSoThich) content.classList.add("show-grid");
    button.classList.remove("view-more");
    button.classList.add("view-less");
    button.innerHTML = "View less";
  } else {
    content.style.display = "none";
    if (isSoThich) content.classList.remove("show-grid");
    button.classList.remove("view-less");
    button.classList.add("view-more");
    button.innerHTML = "View more";
  }
}
