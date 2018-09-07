const questionOne = function questionOne(arr) {
    // Implement question 1 here
    let sum=0;
    if(Array.isArray(arr)){
        arr.map((item)=>{
            sum+=Math.pow(item,2);
        })
    }else{
        return;
    }
    return sum;
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    if(typeof num=="number"){
       return questionOthe(num);
    }else{
        return;
    }
}

// function questionOthe(num,sum){
//     if(num==0||num==1){
//         return num;
//     }
//     //sum=sum;
//     debugger;
//     while(num>1){
//         sum += questionOthe(num-1,sum)+questionOthe(num-2,sum);
//         num--;
//     }
//     return sum;
// }

function questionOthe(n) {
    let n1 = 1,
        n2 = 1,
        sum = 1;
    for(let i = 3; i <= n; i += 1) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return sum;
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    if(typeof text=="string"){
        let num=0;
        let arr = text.split(" ");
        arr = arr.filter((item)=>item!='');
         arr.map((item)=>{
             for(let i=0;i<item.length;i++){
                 if(item[i]=='a'||item[i]=='e'||item[i]=='i'||item[i]=='o'||item[i]=='u'||item[i]=='A'||item[i]=='E'||item[i]=='I'||item[i]=='O'||item[i]=='U'){
                    num++;
                 }
             }
         })
         return num;
    }else{
        return ;
    }
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if(typeof num=="number"){
        if(num<0) return null;
        if(num==0&&num==1) return 1;
        let sum=1;
        while(num>0){
            sum*=num;
            num--;
        }
        return sum;
    }else{
        return;
    }
}

module.exports = {
    firstName: "Tang", 
    lastName: "Yuqi", 
    studentId: "10427183",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};