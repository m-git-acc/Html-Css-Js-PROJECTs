const slides = document.querySelectorAll(".slide");
const copyBtn = document.querySelector(".copyBtn");

var counter = 10;

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index*100}%`;
    }
)

const imageChanger=()=>{
    const main = document.querySelector("main");
    main.innerHTML = `
        <img src="https://picsum.photos/id/${counter}/1000/500" class="slide" alt="internet connection is slow.">
    `;
}

const slideImage = () =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`;
        }
    )
}

const goPrev = ()=>{
    copyBtn.innerText = 'copy link';
    counter--;
    imageChanger();
    slideImage();
}

const goNext = () =>{
    copyBtn.innerText = 'copy link';
    counter++;
    imageChanger();
    slideImage();
}

(
    function(){
        const main = document.querySelector("main");
        main.innerHTML = `
            <img src="https://picsum.photos/id/${counter}/1000/500" class="slide" alt="">
        `;
    }
)()

const copyLink = ()=>{
    navigator.clipboard.writeText(`https://picsum.photos/id/${counter}/1000/500`);

    copyBtn.innerText = 'copied';
}