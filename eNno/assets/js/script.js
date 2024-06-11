window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
  
    if(scrollY > 5){
      document.querySelector("nav").classList.add("navbar-scrolled");
    }else{
      document.querySelector("nav").classList.remove("navbar-scrolled");
    }
})