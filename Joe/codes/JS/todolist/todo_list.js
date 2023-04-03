let arr = []
let content = document.querySelector('.content')
let list = document.querySelector('.list')

content.addEventListener("keyup",keyup)
// console.log(content);


function keyup(e){
    // console.log(e);
    if(e.code === "Enter"){
        arr.push(content.value)
        // console.log(arr);
        show(arr)
        content.value=""
    }
}

function show(arr){
    let str = ""
    for(i=0; i< arr.length; i ++){
        str += `<div class='lis'>${i+1}.${arr[i]} <i data-id = ${i}>x</i></div><br>`
    }
    list.innerHTML=str
}

list.addEventListener("click", function(e){
    // console.log(e);
    if(e.target.tagName === "I"){
        id = e.target.dataset.id
        // console.log(id);
        arr.splice(id, 1)
        show(arr)
    }
})

