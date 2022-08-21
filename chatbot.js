function talk(){
    var know={
        "who are you": "hello, diljeet singh here :)",
        "how are you":"Good :)",
        "what can i do for you":"please give us follow and like",
        "ok": "thank you so much",
        "bye":"okay! will meet soon",
        "hi":"hello",
        "what are you doing":"nothing. just time pass :)",
        "where are you from":'dehli not delhi hahah :)',
        "do you use instagram":"no haha...",

        
    };
    var btn=document.getElementById('btn');
    btn.onclick=function(){
        if(btn.textContent="help?"){
        document.getElementById('ques').style.display="inline-block";
    }
    }
    var user=document.getElementById("user").value;
document.getElementById("result").innerHTML=user+"<br>";

if(user in know){
    document.getElementById("result").innerHTML=know[user]+"<br>";
    
}else{
    document.getElementById("result").innerHTML="Sorry, I did't understand <br>";
}
}
