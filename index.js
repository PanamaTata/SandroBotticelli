let titles = Array.from(document.querySelectorAll(`.accordion-title`));
console.log(titles);

for (let title of titles) {
    title.addEventListener(`click`, () => {
        title.nextElementSibling.classList.toggle(`hidden`)
    })
};