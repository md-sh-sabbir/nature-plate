const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  let isOpen = false;

  menuToggle.addEventListener("click", () => {
    isOpen = !isOpen;

    if (isOpen) {
      mobileMenu.classList.remove("top-[-1000px]", "opacity-0");
      mobileMenu.classList.add("top-[84px]", "opacity-100");
    } else {
      mobileMenu.classList.remove("top-[84px]", "opacity-100");
      mobileMenu.classList.add("top-[-1000px]", "opacity-0");
    }
  });

