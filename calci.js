var aud = new Audio();
aud.src = "./Asset/audio/sound-1-167181.mp3"

var equalsaud = new Audio();
equalsaud.src = "./Asset/audio/happy-pop-3-185288.mp3"

var allinp = document.querySelectorAll("input");
console.log(allinp)

function pressNum(){
    for(i = 0; i <= allinp.length-1; i++)
    {
        if(i == allinp.length-1)
        {
            allinp[i].addEventListener("click",function(){
                equalsaud.play()
            })
        }
        else{
            allinp[i].addEventListener("click",function(){
                console.log("play")
                aud.play()
            })
        }
    }
}
pressNum()