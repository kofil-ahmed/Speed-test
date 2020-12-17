const someText = [
    "My name is kofil ahmed and I am a electrical engineering student.",
    "Hope you are having fun this is a simple game you can make.",
    "If you want the source code then link is given in the description so you can create your own version of this challenge."
];
const msg = document.getElementById("msg");
const typeWords = document.getElementById("mywords");
const btn = document.getElementById("btn");
let startTime,endTime;
startGame = ()=>{
    let randomNumber = Math.floor(Math.random()*someText.length);
    msg.innerText = someText[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    typeWords.value = " ";
    btn.innerText = "Done"
}
endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let totalTypeStr = typeWords.value;
    let countText = counterText(totalTypeStr);
    let speed = Math.round((countText / totalTime) *60);
    let showMsg = "You typed total at " + speed + " words per minutes. ";   
    showMsg += comparwords(msg.innerText,totalTypeStr);
    msg.innerText = showMsg;
}
const counterText = (str) =>{
    let response = str.split(" ").length;
    return response;
}
comparwords = (str1,str2) =>{
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let count = 0;
    word1.forEach(function(item,index){
        if(item == word2[index])
        count++
    })
    let errorWords = (word1.length - count);
    return (count + " correct out of " + word1.length +(" words and the total number of error are " + errorWords + ".") )
};
btn.addEventListener("click",function(){
    if(btn.innerText == "Start"){
        typeWords.disbled = false;
        startGame();
    }
    else if(btn.innerText == "Done"){
        typeWords.disbled = true;
        btn.innerText = "Start";
        endGame();
    }
})