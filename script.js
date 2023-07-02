 


function clearInput() {
    document.getElementById("input").value="";
   
} 

 function deleteElement() {
    let input =document.getElementById("input");
    input.value = input.value.slice(0,-1);
 }

 function calculate() {

    let input =document.getElementById("input");
    if (input.value=="") {
        input.value="Enter digits first..."
        setTimeout(()=>input.value="",1000)
        return
    }
   let ans =  eval(input.value)
   input.value=ans;
 }

 function appendElement(element) {
    let input =document.getElementById("input");
    input.value=input.value+""+element;
 }