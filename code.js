document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  //   console.log(scrollPosition);
  const animatedElements = document.querySelectorAll(
    ".art2, .art3, .art4, .quotes .op1, .quotes .op2"
  );

  console.log(scrollPosition);

  animatedElements.forEach((ele, index) => {
    const positionFromTop = ele.offsetTop;
    const elementHeight = ele.offsetHeight;

    if (scrollPosition > positionFromTop + elementHeight - window.innerHeight) {
      ele.classList.add("active");
    }
  });

  if (scrollPosition < 100) {
    animatedElements.forEach(ele => ele.classList.remove("active"));
  }
});

document.querySelector("img").addEventListener("click", function() {
  window.scrollTo({
    top: 2000,
    behavior: "smooth"
  });
});
