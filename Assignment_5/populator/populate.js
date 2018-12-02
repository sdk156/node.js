var ChancePackage=require('chance'); //import chance module
var Chance= new ChancePackage();// create an object to use its member functions
var engg_array=new Array(),proj_array=new Array(),man_array=new Array(),projects=['node','IoT','WSN','DB']; 

//creating data to br filled into the database for testing
for(let i=0;i<4;i++){
    man_array[i]=new Object();
    man_array[i]["Manager ID"]=Chance.integer({min:1000000,max:9999999});
    man_array[i]["First Name"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    man_array[i]["Last Name"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    man_array[i]["Sector"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    man_array[i]["Project"]=projects[i];
    proj_array[i]=new Object();
    proj_array[i]["Name"]=projects[i];
    proj_array[i]["Manager ID"]=man_array[i]["Manager ID"];
    proj_array[i]["Duration in Months"]=Chance.integer({min:1,max:30});
}
for(let i=0;i<15;i++){ 
    engg_array[i]=new Object();
    engg_array[i]["Employee ID"]=Chance.integer({min:1000000,max:9999999});
    engg_array[i]["First Name"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    engg_array[i]["Last Name"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    engg_array[i]["Domain"]=Chance.string({length:10,pool:'abcdefghijklmnopqrstuvwxyz'});
    engg_array[i]["Project Name"]=projects[Chance.integer({min:0,max:3})];
    }

//console.log(man_array);
//console.log(engg_array);
//console.log(proj_array);
module.exports={
    enggs:engg_array,
    projs:proj_array,
    mnjs:man_array
}