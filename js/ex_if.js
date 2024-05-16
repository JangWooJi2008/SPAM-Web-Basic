const name = "Mike";
const age = 30;

if(name=="Tom" && age > 19){
    console.log("쥬금");
}else{
    console.log("다음에 쥬글거임");
}

if(name === "Tom" || age > 19){
    console.log("쥬금");
}
else{
    console.log("다음에 쥬임거임");
}

if(name == "Mike" && age > 19){
    console.log("쥬금");
}
else{
    console.log("다음에 쥬글거임")
}

let isAdult = age > 19;
if(isAdult){
    console.log("성인입니다.");
}

if(!isAdult){
    console.log("미성년자입니다.");
}