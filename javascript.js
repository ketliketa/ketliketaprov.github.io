   function prevSlide() {
            const carousel = document.getElementById('carousel');
            const carouselWidth = carousel.clientWidth;
            const itemsToShow = 5; 
    
            carousel.scrollLeft -= carouselWidth / itemsToShow;
        }
    
      
        function nextSlide() {
            const carousel = document.getElementById('carousel');
            const carouselWidth = carousel.clientWidth;
            const itemsToShow = 5; 
    
            carousel.scrollLeft += carouselWidth / itemsToShow;
        }
       
function adjustLayout() {
    const viewportWidth = window.innerWidth;

  
    if (viewportWidth < 768) {
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.style.flexBasis = '100%';
            category.style.margin = '10px 0';
        });

        const adItems = document.querySelectorAll('.ad-item');
        adItems.forEach(adItem => {
            const shopNowBtn = adItem.querySelector('.shop-now');
            shopNowBtn.style.position = 'static';
            shopNowBtn.style.display = 'block';
            shopNowBtn.style.width = '100%';
            shopNowBtn.style.margin = '10px 0';
        });

        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.style.flex = '0 0 100%';
        });

        const productInfos = document.querySelectorAll('.product-info');
        productInfos.forEach(info => {
            info.style.width = '100%';
            info.style.margin = '10px 0';
        });
    }
   
    else {
        const categories = document.querySelectorAll('.category');
        categories.forEach(category => {
            category.style.flexBasis = '20%';
            category.style.margin = '10px';
        });

        const adItems = document.querySelectorAll('.ad-item');
        adItems.forEach(adItem => {
            const shopNowBtn = adItem.querySelector('.shop-now');
            shopNowBtn.style.position = 'absolute';
            shopNowBtn.style.display = 'inline-block';
            shopNowBtn.style.width = 'auto';
            shopNowBtn.style.margin = '0';
        });

        const carouselItems = document.querySelectorAll('.carousel-item');
        carouselItems.forEach(item => {
            item.style.flex = '0 0 20%';
        });

        const productInfos = document.querySelectorAll('.product-info');
        productInfos.forEach(info => {
            info.style.width = '200px';
            info.style.margin = '0';
        });
    }
}


adjustLayout();


window.addEventListener('resize', adjustLayout);
