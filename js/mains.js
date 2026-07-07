const hero = document.querySelector(".hero-background");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*10;

    const y=(e.clientY/window.innerHeight-.5)*10;

    hero.style.transform=
        `translate(${x}px,${y}px) scale(1.05)`;

});

const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.15
});

reveals.forEach(item=>observer.observe(item));