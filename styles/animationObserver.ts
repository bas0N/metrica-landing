export const animationObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);

      if (entry.isIntersecting) {
        console.log("is intersecting");
        entry.target.classList.add("show-element");
      } else {
        console.log("is not intersecting");

        entry.target.classList.remove("show-element");
      }
    });
  });
  const hiddenElements = document.querySelectorAll(".hide-element");
  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
};
