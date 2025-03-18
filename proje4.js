const menuButton = document.querySelector(".line-box");

menuButton.addEventListener("click", () => {
    const links = document.querySelector(".links");
    const l1 = document.querySelector(".l1");
    const l2 = document.querySelector(".l2");
    const l3 = document.querySelector(".l3");
    const firstPage = document.querySelector(".firstPage");

    if (l1.classList.contains("transformUp")){
        // Reverse animations
        links.style.opacity = "0";
        l1.classList.remove("transformUp");
        l2.classList.remove("transformNone");
        l3.classList.remove("transformDown");
        firstPage.classList.remove("pageRotate");
    } else {
        // Start animations
        links.style.opacity = "1";
        l1.classList.add("transformUp");
        l2.classList.add("transformNone");
        l3.classList.add("transformDown");
        firstPage.classList.add("pageRotate");
    }
});