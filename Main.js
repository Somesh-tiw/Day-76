let arr=[
    "https://images.pexels.com/photos/575610/pexels-photo-575610.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/575610/pexels-photo-575610.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5945739/pexels-photo-5945739.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3613159/pexels-photo-3613159.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1114797/pexels-photo-1114797.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=600"

]
let name=["Apple","Mango","Papaya","Guava","Orange","pineapple","Watermelon"]
let btn1=document.querySelector('.btn1')
let btn2=document.querySelector('.btn2')
let img=document.querySelector('img')
let h1=document.querySelector('h1')
let heart=document.querySelector('i')
console.log(heart)


let index=0
let index_1=arr.length
let count=false


let Next=()=>{
    if(index<arr.length){
        img.src=arr[index]
        h1.innerText=name[index]
        
        index=index+1
        console.log(index)
    }
    else{
     index=0
       
    }
   
}

let Back=()=>{
if(index_1<=0){
    index_1=arr.length
}
else{
    index_1=index_1-1
    img.src=arr[index_1]
    h1.innerText=name[index_1]
console.log(index_1)
}
   
}


let like = () => {
    count = !count; 
    heart.style.color = count ? "red" : "black"; 
    console.log("Heart Liked:", count);
};




btn1.addEventListener('click',Next)
btn2.addEventListener('click',Back)
heart.addEventListener('click',like)






