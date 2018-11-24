function isArmstrong(num,callback){
    let q=num,sum=0;
    power=0;
    //this loop is used to find the power to which each digit has to be raised
    while(q>0){
        q=parseInt(q/10);
        power++;
    }
    q=num;
    //this loop separates the digits, raises its power and calculates sum
    while(q>0){
        let rem=q%10;
    
        sum+=Math.pow(rem,power);
        q=parseInt(q/10);
        // console.log("q",q);
        // console.log("rem",rem);
    
    }
    // console.log("sum",sum);
    if(sum==num){
        callback(true);
    
    }else{
        callback(false);
    }
    }
    //exporting the function

    module.exports={
        isArmstrong:isArmstrong
    };