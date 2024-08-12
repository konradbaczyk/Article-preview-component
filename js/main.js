const shareBtn = document.querySelector("#share-btn");
const shareArrow = document.querySelector("#share-arrow");
const shareIconsBox = document.querySelector("#share--icons-box");

const showIconsBox = () => {
	shareIconsBox.classList.toggle("display-none");
	shareBtn.classList.toggle("active");
	shareArrow.classList.toggle("active");
};

shareBtn.addEventListener("click", showIconsBox);
