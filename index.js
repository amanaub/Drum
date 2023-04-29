//selecting each and adding function
// document.querySelector("button.a").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.w").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.d").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.j").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.s").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.k").addEventListener("click",function(){alert("I got clicked");});
// document.querySelector("button.l").addEventListener("click",function(){alert("I got clicked");});

//using for loop//iteration over each object using for loop and adding event listner
//How to add color when any element got clicked
// for(var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     //document.querySelectorAll(".drum")[i].addEventListener("click",function(){alert("I got clicked");});
//     //adding audio to all drum
//     document.querySelectorAll(".drum")[i].addEventListener("click",
//     function(){
//         this.innerHTML.color="white";
//     }
//     )
// }


/*How to add sound to each drum
 -->will add sound to each element one by one using for loop ..didnt worked
 -->selected content of each element using innerhtml then used switch case to add sound*/



/* receiving key using keypress event listener in audio_play function and performing task*/
function audio_play(keyName)
{
    switch(keyName){
        case 'w':
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
    }
}
//when click
var number_of_element=document.querySelectorAll(".drum").length;
for(var i=0;i<number_of_element;i++)
{
   document.querySelectorAll(".drum")[i].addEventListener("click",
   function(){
       // var audio_selector="sounds/tom-"+i+".mp3";
       // var audio=new Audio(audio_selector);
       //     audio.play();
       var expression=this.innerHTML;
       audio_play(expression);
       animationOnButton(expression);
       
   })
}
//when key press
document.addEventListener("keypress",function(event)
{
    var keyName=event.key;
    audio_play(keyName);
    
})

//adding animation..will add transparent color for 0.1 sec and remove

function animationOnButton(keyName)
{
    document.querySelector('.'+keyName).classList.add("pressed");
    setTimeout(function(){
        document.querySelector('.'+keyName).classList.remove("pressed");
    },100)
}

