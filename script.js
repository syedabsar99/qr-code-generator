let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btn = document.getElementById("btn");
let err = document.querySelector(".error-msg");
let downloadBtn = document.querySelector("#downloadBtn");
let historyContainer = document.querySelector("#historyContainer");
let historyBox = document.querySelector(".history-section");
let history = [];
function updateHistory(value) {
  if (!history.includes(value)) {
    history.push(value);
    if (history.length > 5) {
      history.shift();
    }
    localStorage.setItem("history", JSON.stringify(history));
  }
}
function renderHistory() {
  historyContainer.innerHTML = "";
  for (let el of history) {
    let hisDiv = document.createElement("div");
    hisDiv.classList.add("history-item");
    let p = document.createElement("p");
    p.classList.add("history-text");
    p.textContent = el;
    hisDiv.appendChild(p);
    let delBtn = document.createElement("button");
    delBtn.classList.add("delete-btn");
    delBtn.textContent = "✕";
    hisDiv.appendChild(delBtn);
    historyContainer.appendChild(hisDiv);
    delBtn.addEventListener("click", function () {
      history = history.filter(function (item) {
        return item !== el;
      });
      localStorage.setItem("history", JSON.stringify(history));
      renderHistory();
      toggleHistoryVisibility();
    });
    p.addEventListener("click", function (evt) {
      qrText.value = evt.target.textContent;
    });
  }
}
function toggleHistoryVisibility() {
  if (history.length === 0) {
    historyBox.style.display = "none";
  } else {
    historyBox.style.display = "block";
  }
}
function generateQR() {
  if (qrText.value.trim() !== "") {
    err.style.display = "none";
    btn.textContent = "Generating QR ...";
    btn.disabled = true;
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    qrImage.addEventListener("load", function () {
      btn.textContent = "Generate QR Code";
      btn.disabled = false;
      downloadBtn.style.display = "block";
      updateHistory(qrText.value);
      renderHistory();
      toggleHistoryVisibility();
    });
  } else {
    err.style.display = "block";
  }
}
downloadBtn.addEventListener("click", function () {
  let responsePromise = fetch(qrImage.src);
  responsePromise.then((response) => {
    response.blob().then((blob) => {
      let blobURL = URL.createObjectURL(blob);
      let downloadBtnProcess = document.createElement("a");
      downloadBtnProcess.href = blobURL;
      downloadBtnProcess.download = `${qrText.value}.png`;
      document.body.appendChild(downloadBtnProcess);
      downloadBtnProcess.click();
      URL.revokeObjectURL(blobURL);
    });
  });
});
btn.addEventListener("click", function () {
  generateQR();
});
qrText.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    generateQR();
  }
});
qrText.addEventListener("input", function () {
  if (qrText.value.trim() === "") {
    imgBox.classList.remove("show-img");
    downloadBtn.style.display = "none";
  } else {
    err.style.display = "none";
  }
});
let historyData = localStorage.getItem("history");

if (historyData !== null) {
  history = JSON.parse(historyData);
}
renderHistory();
toggleHistoryVisibility();
