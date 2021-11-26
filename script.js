const accordionHeader = document.querySelectorAll(".accordion__header")

for (let i = 0; i < accordionHeader.length; i++) {
    accordionHeader[i].addEventListener("click", function() {
        accordionHeader[i].classList.toggle("rotate")
        accordionHeader[i].classList.toggle("rounded-all")
        accordionHeader[i].nextElementSibling.classList.toggle("hidden")
    })
}