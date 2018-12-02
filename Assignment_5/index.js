const sequelizeORM=require('sequelize');// importing the ORM
const dbName='postgres'; // name of the database
var populate=require('./populator/populate'); //dummy data generator for database testing

//auth credentials for the database
const username='postgres'; 
const password='qwerty@12345';
//options object to the database
var dbOptions=new Object();
dbOptions.localhost='localhost';// host ip
dbOptions.dialect='postgres'; //type of database 
dbOptions.storage='./storage/sdkDB.sqlite'; //storage 

//columns of the engineer table
var engineerSchema={
    'Employee ID':{
        type:sequelizeORM.BIGINT,
        primaryKey:true
    }, 
    'First Name':{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-z]','i']
        }
    },
    'Last Name':{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-z]','i']
        }
    },
    Domain:{
        type:sequelizeORM.STRING,
        validate:{
        is:['[a-z ]','i']

                    }
        }
        
          
};
//columns of the manager table
const managerSchema={
    "Manager ID":{
        type:sequelizeORM.BIGINT,
        validate:{
            is:['[0-9]']
        },
        primaryKey:true
    }, 
    "First Name":{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-z]','i']
        }
    },
    "Last Name":{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-z]','i']
        }
    },
    Project:{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-z ]','i']
        }
    },
    Sector:{
        type:sequelizeORM.STRING,
        validate:{
            is:['[a-zA-Z ]','i']

    }
}



};

//columns of the projects table
const projectSchema={
      'Name':{
        type:sequelizeORM.STRING,
    validate:{
        is:['[a-z ]','i']
    },
    primaryKey:true

    },
    "Duration in Months":{
        type:sequelizeORM.STRING,
        validate:{
        is:['[0-9 ]']

}
    }  

};




var engineerArray=populate.enggs,managerArray=populate.mnjs,projectArray=populate.projs; // variables to store sample data
const postgreSQL=new sequelizeORM(dbName,username,password,dbOptions);// creating an instance for the postgreSQL database

//creation of models
const engineer=postgreSQL.define('Engineers',engineerSchema,{
    validate: true,
    timestamps: false,
    freezeTableName: true,
    tableName:'Engineers'
});
//defining instance methods of 'Engineers' model
//this method returns the engineers working in a specific project
engineer.getEngineers=function(project){
    //query method used to get all instances matching the 'where' condition
    engineer.findAll({
                where:{
                    "Project Name":project
                }
            }).then((engg)=>{
                //iterating through the instances and printing the instances to the console
                for(let index in engg){
                    console.log(project,engg[index].dataValues);

                }
                
                
            }).catch((err)=>{
                console.log('project engineers',err);
            });
        }   
    // this method is used to delete an engineer details from the 'Engineers' table    
    engineer.delete=function(ID,callback){
        //query method to delete a row which matches the 'where' condition
        engineer.destroy({
            where:{
                "Employee ID":ID
            }
        }).then((employee)=>{
            console.log("deleted emp",ID)
            callback();
        });
    }
    
    //this method is used to update an engineer details
    engineer.updateEngineer=function(ID,enggDetail,callback){
        //query method used to find one particular instance matches the 'where' condition
        engineer.findOne({
            where:{
                "Employee ID":ID
            }
        }).then((employee)=>{// employee is the instance that constains the details of the matched condition 
            //query method used to update the details of the found instance without altering the primary key
            //even if the primary key is tried to alter, it cannot be altered 
            employee.update(enggDetail).then((h)=>{
                console.log('successful update',h.dataValues);
                callback();
            });
        }).catch(()=>{
            console.log("unsuccessfull update");
        });

    }


// defining Managers model
const manager=postgreSQL.define('Managers',managerSchema,{
    validate: true,
    timestamps: false,// removes updatedAt and createdAt timestamps
    freezeTableName: true,// this eliminates to make the table name in plural form
    tableName:'Managers'
});

//defining Projects model 
const project=postgreSQL.define('Projects',projectSchema,{
    validate: true,
    timestamps: false,
    freezeTableName: true,
    tableName:'Projects'

});
//this method is used to assign a manager to a project
project.assignManager=function(managerID, projectName,callback){
    //query method used to find a single instance (row) that matches the 'where' condition
    project.findOne({
        where:{
            "Name":projectName
        }
    }).then((man)=>{// man is the instance of the resultant row in the table
        //query method to update the details of the found instance
        man.update({
        
            "Manager ID":managerID
        
    }).then(()=>{
        console.log('update success');
        callback();
    }).catch(()=>{
        console.log('update failed')
    });

    });
}

//this method deletes a project from the 'Projects' table
project.delete=function(name){
 project.destroy({
        where:{
            "Name":name

        }
    }).then((pro)=>{
        console.log("deleted project",name);
        
    });
}

//creating relations or associations
project.belongsTo(manager,{foreignKey:"Manager ID",targetKey:"Manager ID"});
engineer.belongsTo(project,{foreignKey:"Project Name", targetKey:"Name"});


//check for successful authentication
postgreSQL.authenticate().then(()=>{
    console.log('auth success');
    
    //creating table one by one as per foreign key generation hierarchy    
    manager.sync({force:true}).then(()=>{
                 manager.bulkCreate(managerArray).then((managersObject)=>{
                    project.sync({force:true}).then(()=>{
                        project.bulkCreate(projectArray).then((projectsObject)=>{
                            engineer.sync({force:true}).then(()=>{
                                engineer.bulkCreate(engineerArray).then((engineersObject)=>{
                                    tester(engineersObject,managersObject,projectsObject);
                                }).catch((err)=>{
                                    console.log('error injecting data, engineers',err);
                                });
               
                            }).catch((err)=>{
                                console.log('error creating engineers table', err);
                        });
                       
               
                           }).catch((err)=>{
                               console.log('error injecting data, projects',err);
                           });
                       }).catch((err)=>{
                           console.log('error creating projects table',err);
                       });

                 }).catch((err)=>{
                    console.log('error injecting data, managers',err)

                 });
                
            }).catch((err)=>{
                console.log('error creating managers table',err);
            });
    
}).catch((err)=>{
    console.log('auth failed');
});

//this function is used to test the query functions one by one
function tester(engObj,manObj,projObj){
    //testing the methods on the database data
    //get engineers using project name
    engineer.getEngineers('WSN');
    engineer.getEngineers('IoT');
    engineer.getEngineers('node');
    engineer.getEngineers('DB');

    //delete engineer by ID
    //deleting the first engineer details
    engineer.delete(engObj[0].dataValues['Employee ID'],()=>{
    
        //updating engineer using ID 
    engineer.updateEngineer(engObj[2].dataValues['Employee ID'],{//updating third engineer details
        "Employee ID":"1569798",// this wont be added since updating a primary key is not valid
        "First Name":"Dinesh",
        "Last Name":"Krishna",
        "Project Name":"WSN",
        "Domain":"IoT"
    },()=>{
        //Assign manager to a project
        // assigning a project to the first manager in the table
        project.assignManager(manObj[0].dataValues['Manager ID'],'IoT',()=>{
        //delete a project by its name
        project.delete(projObj[0].dataValues['Name']);// deleting the first project

    });

    });

    }); 

    
    

    



}