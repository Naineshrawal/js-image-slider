        let scrollContainer = document.querySelector(".slider-container")
        let backButton = document.getElementById("back-btn")
        let nextButton = document.getElementById("next-btn")

        // images array you can store as much imagaes as you want
        let imgArr = ['/img/image-1.jpg','/img/image-2.jpg','/img/image-3.jpg',
        '/img/image-4.jpg','/img/image-5.jpg','/img/image-6.jpg','/img/image-7.jpg' ]



        let currentIndex = 1;

        imgArr.forEach((imgSrc)=>{
           const imgSlide = document.createElement('img')
           imgSlide.src = imgSrc
           imgSlide.classList.add('slidingImg')
           scrollContainer.append(imgSlide)
           
        })


        // to prevent the scrolling through mouse scroll
        scrollContainer.addEventListener("wheel", (e)=>{
            e.preventDefault();
        } )

        // slide next

        const slideNext = ()=>{
            
            if(scrollContainer.scrollWidth === currentIndex * scrollContainer.clientWidth ){
                scrollContainer.scrollLeft -= scrollContainer.scrollWidth
                currentIndex = 1
                return
                
            }
            
            scrollContainer.scrollLeft += scrollContainer.clientWidth   
            currentIndex++      
        }
        nextButton.addEventListener("click", ()=>{

            slideNext()
        })

        // slide back
        backButton.addEventListener("click", (e)=>{
            e.preventDefault()
            scrollContainer.scrollLeft -= scrollContainer.clientWidth
            if(currentIndex>1)currentIndex--
            console.log(currentIndex);
        })

        // auto slider
        const autoSliding = setInterval(()=>{
            
            slideNext()
        },3000)