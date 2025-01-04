// Scroll-to-Top Button
const scrollButton = document.createElement("button");
scrollButton.innerText = "↑";
scrollButton.style.position = "fixed";
scrollButton.style.bottom = "20px";
scrollButton.style.right = "20px";
scrollButton.style.backgroundColor = "#006699";
scrollButton.style.color = "white";
scrollButton.style.border = "none";
scrollButton.style.borderRadius = "50%";
scrollButton.style.padding = "10px";
scrollButton.style.cursor = "pointer";
scrollButton.style.display = "none";
document.body.appendChild(scrollButton);

window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

scrollButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Class Filter (For Classes Page)
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".class-category");
    const classItems = document.querySelectorAll(".class-item");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;
            classItems.forEach((item) => {
                if (item.dataset.category === category || category === "all") {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
