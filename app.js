let main_sec = document.querySelector("main");

main_sec.addEventListener("wheel",(e)=>{
    e.preventDefault();
    main_sec.scrollLeft += e.deltaY * 10;
})

let lines = document.querySelectorAll(".lines")
// console.log(lines);

anime({
    targets: lines,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: function(el, i) { return i * 500 },
    direction: 'alternate',
    loop: true
  });

  let yellow = document.querySelector(".yellow")
 let red = document.querySelector(".red");

  anime({
    targets: [yellow, red, ".big_yellow"],
    translateX: 20,
    translateY:10,
    duration:2000,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });

  anime({
    targets: ".litle_red",
    keyframes: [
        { translateX:15},
        {translateY:15},
        {translateX:-15},
        {translateY: 0},
    ],
    duration:4000,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });

  let text_circle = document.querySelectorAll(".circle_text")

  anime({
    targets: text_circle,
    rotateX: "360deg",
    duration: 11000,
    direction: 'alternate',
    loop: true,
    easing: 'linear'
  });
  

// let circle_red = document.querySelector(".litle_red");
// document.addEventListener("mousemove", function(e){
//     let x = e.clientX * 50 / window.innerWidth + "px";
//     let y = e.clientY * 10  / window.innerHeight + "px";

//     circle_red.style.top= y;
//     circle_red.style.left = x;

    // for (let i = 0; i < circles.length; i++) {
    //     circles[i].style.top = y;
    //     circles[i].style.left = x;
    // }
// })

let imgs = document.querySelectorAll('.img_port');
// console.log(imgs);
let fron_img= document.querySelectorAll(".img_front");

document.addEventListener("mousemove", function(e){
    let x = e.clientX * 20 / window.innerWidth + "px";
    let y = e.clientY * 20  / window.innerHeight + "px";

    for (let i = 0; i < 3; i++) {
        imgs[i].style.top = y;
        imgs[i].style.left = x;
    }
})