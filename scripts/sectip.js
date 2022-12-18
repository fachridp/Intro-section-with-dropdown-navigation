const navLinkItemsContainerFlex = document.querySelector(
  ".nav__link__items__container__flex"
);

const linkHasDropdownItems = document.querySelectorAll(
  ".link__has__dropdown__items"
);

const dropdownItemsContainer = document.querySelectorAll(
  ".dropdown__items__container"
);
const iconMenu = document.querySelector(".icon__menu");
const iconCloseMenu = document.querySelector(".icon__close__menu");

iconMenu.addEventListener("click", (e) => {
  document.body.classList.toggle("overlay");
  iconCloseMenu.style.display = "block";
  navLinkItemsContainerFlex.classList.toggle("show");
});

iconCloseMenu.addEventListener("click", (e) => {
  iconCloseMenu.style.display = "none";
  navLinkItemsContainerFlex.classList.toggle("show");
  document.body.classList.toggle("overlay");
});

for (let i = 0; i < linkHasDropdownItems.length; i++) {
  linkHasDropdownItems[i].addEventListener("click", (e) => {
    e.target.parentElement.children[2].classList.toggle(
      "show__dropdown__items"
    );

    if (
      e.target.parentElement.children[2].classList[1] ===
      "show__dropdown__items"
    ) {
      e.target.parentElement.children[1].src = "../images/icon-arrow-up.svg";
    } else {
      e.target.parentElement.children[1].src = "../images/icon-arrow-down.svg";
    }
  });
}
