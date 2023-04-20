let screeen=document.getElementById("screeen");
butttons=document.querySelectorAll("button");
let screeenValue="";
for(item of butttons){
    item.addEventListener("click",(e)=>{
        butttonText=e.target.innerText;
        console.log("Buttton Text Is",butttonText);
        if(butttonText=="X"){
            butttonText="*";
            screeenValue +=butttonText;
            screeen.value =screeenValue;
        }
        else if(butttonText=="C"){
            screeenValue ="";
            screeen.value =screeenValue;
        }
        else if(butttonText=="="){
            screeen.value=eval(screeenValue);
        }
        else{
            screeenValue +=butttonText;
            screeen.value=screeenValue;
        }

    });
}