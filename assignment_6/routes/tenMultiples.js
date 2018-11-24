function tenMultiples(num,callback){
    let array=[],i=0;
    // this loop builds an array with first ten multiples of the given number
    while(i<10){
        array[i]=num+num*i;
        i++;
    }
    callback(array);
    }
    //exporting the function
    module.exports={
        tenMultiples:tenMultiples

    };