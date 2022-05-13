let images = [{
    url: "./images/projects_2.1.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    url: "./images/projects_2.2.jpg",
    title: "Sochi Thieves"
  }, {
    url: "./images/projects_2.3.jpg",
    title: "Rostov-on-Don Patriotic"
  }];

  function initSlider(images) {
    if (!images || !images.length) return;  
    
  
    const sliderImages = document.querySelector(".image-progect");
    const sliderArrows = document.querySelector(".slider-navigation");
    const sliderLinks = document.querySelectorAll(".projects");
    const dotsWrapper = document.querySelector(".navigation-dots");
   
    initImages();
    initArrows();
    initLinks();
    initDots();   
 
     function initImages() {
         images.forEach((image, index) => {
           let imageElement = document.createElement("div");
           imageElement.className = `image n${index} ${index? "" : "active"}`;
           imageElement.dataset.index = index;
           imageElement.style.backgroundImage = `url(${image.url})`;
           sliderImages.appendChild(imageElement);
         });
       }

       function initArrows() {
        let lastIndex = images.length - 1;
        sliderArrows.querySelectorAll(".sliderarrow").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? lastIndex : curNumber - 1;
            } else {
              nextNumber = curNumber === lastIndex? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }

      function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector(`.n${num}`).classList.add("active");        
      }

      function initLinks(){
        sliderLinks.forEach((link, index) => {
          let linkElement = document.createElement("a");
          linkElement.className = `${images[index].title}`;
          linkElement.textContent =`${images[index].title}`;
          // linkElement.dataset.index = index;
          // linkElement.style.backgroundImage = `url(${image.url})`;
          link.appendChild(linkElement);
          link.addEventListener("click", function(){
            sliderImages.querySelector(".active").classList.remove("active");
            sliderImages.querySelector(`.n${index}`).classList.add("active");
          })
        });
  }

  function initDots() {
   
    // dotsWrapper.className = "slider__dots";
    images.forEach((image, index) => {
      let dot = document.createElement("div");
      dot.className = `slider__dots-item n${index} ${index? "" : "active"}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        dotsWrapper.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      });
      dotsWrapper.appendChild(dot);
    });
    // sliderArrows.appendChild(dotsWrapper);
  }
}

   

  document.addEventListener("DOMContentLoaded", () => {
    
    initSlider(images);
  }
  )