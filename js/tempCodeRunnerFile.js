const numbers = [1,2,3,4,5];
const  total = numbers.reduce((acc,num)=>{
    if (num % 2 == 0){
        return acc + num 
    }
    return acc
},0)