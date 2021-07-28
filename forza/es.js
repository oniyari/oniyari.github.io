vet = [1,4,2,6,4,3,5,7,4,2,2,1,6,4,3,2,5,6,7,5,7,8,5,4,3,5];

function nUnique(v)
{
    f = [];
    for(i in v)
        if(!f.includes(v[i]))
            f.push(v[i])
    return f.length;
}

function FirstFactorial(num) { 

    // code goes here  
    console.log(num);
    return num * (num == 1 ? 1 : FirstFactorial(num-1));

}