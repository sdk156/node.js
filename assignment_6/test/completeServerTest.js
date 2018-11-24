var chai= require('chai'); // assertion module
var chaihttp=require('chai-http'); // this module is used to send requests to the server
var expect=chai.expect;// expect library from assertion module
var dkServer=require('../index'); // importing my server
chai.use(chaihttp);// implementing middleware for handling http requests and responses
//tests as follows
describe("unauthenticated api requests",()=>{
    it("should return Hello DK for empty GET request",(done)=>{
        chai.request(dkServer).get('/').end((err,res)=>{
            expect(res.text).to.eql("Hello DK");
            done();
        });
    });
    it("should return [6,12,18,24,30,36,42,48,54,60] for number 6",(done)=>{
        chai.request(dkServer).get("/10multiple/6").end((err,res)=>{
            expect(res.body).to.eql([6,12,18,24,30,36,42,48,54,60]);
            done();
        });

    });
    it("should return invalid number for string input",(done)=>{
        chai.request(dkServer).get("/10multiple/hi").end((err,res)=>{
            expect(res.text).to.eql('invalid number');
            done();
        });

    });
    it('should return \'invalid request\' for GET with user credentials',(done)=>{
        chai.request(dkServer).get('/auth').send({
            "name":"Dinesh Krishna",
            "age":"21",
            "email":"dineshkrishna1997@gmial.com",
            "subjects":["node","iot","sensors","mcu"],
            "CGPA":"7.59"
        }).end((err,res)=>{
            expect(res.text).to.eql('invalid request');
            done();
        });
    });
        it('should return \'invalid user crentials\' for wrong schema',(done)=>{
            chai.request(dkServer).post('/auth').send({
                "name":"Dinesh Krishna",
                "age":"21",
                "email":"dineshkrishna1997@gmial.com",
                "subjects":["node","iot","sensors","mcu"],
                }).end((err,res)=>{
                expect(res.text).to.eql('invalid user credentials');
                done();
            });


    });
    it("should return authenticated users only for no token @ /charAsKey",(done)=>{
        chai.request(dkServer).get('/charAsKey').set("Content-Type","text/plain").send("let's play!").end((err,res)=>{
            expect(res.text).to.eql("authenticated users only");
            done();
        });
    });
    it("should return authenticated users only for no token @ /isArmstrong",(done)=>{
        chai.request(dkServer).get('/isArmstrong').query({"num":1634}).end((err,res)=>{
            expect(res.text).to.eql("authenticated users only");
            done();
        });
    });
    

    
});
describe("api\'s which require user authentication",()=>{
    var authUser = chai.request.agent(dkServer);
    it("should return a access_token as cookie and a message 'user authenticated successfully' for valid user credentials",(done)=>{
        authUser.post('/auth').send({
            "name":"Dinesh Krishna",
            "age":"21",
            "email":"dineshkrishna1997@gmial.com",
            "subjects":["node","iot","sensors","mcu"],
            "CGPA":"7.59"
        }).end((err,res)=>{
            expect(res).to.have.cookie('access_token');
            expect(res.text).to.eql('user authenticated successfully');
            done();
        });

        
    });
    it("should return a json object with character as key and its occurence as value",(done)=>{
        authUser.get('/charAsKey').set("Content-Type","text/plain").send("let's play!").end((err,res)=>{
            let output={"l":2,"e":1,"t":1,"\'":1,"s":1," ":1,"p":1,"a":1,"y":1,"!":1};
            expect(res.body).to.eql(output);
            done();
        });
    });
    it("should return invalid data for wrong schema",(done)=>{
        authUser.get('/charAsKey').send({"name":"dk"}).end((err,res)=>{
            expect(res.text).to.eql("invalid data");
            done();
        });
    });
    it("should return true for 1634, an armstrong number",(done)=>{
        authUser.get('/isArmstrong').query({"num":1634}).end((err,res)=>{
            expect(res.text).to.eql('Hurrah! 1634 is an Armstrong Number');
            done();
        });
    });
    it("should return false for 100, a non armstrong number",(done)=>{
        authUser.get('/isArmstrong').query({"num":100}).end((err,res)=>{
            expect(res.text).to.eql('Alas, 100 is NOT an Armstrong Number');
            done();
        });
    });
    it("should return invalid number for data other than numbers",(done)=>{
        authUser.get('/isArmstrong').query({"num":"dk"}).end((err,res)=>{
            expect(res.text).to.eql('invalid number');
            done();
        });
    });


    
});
//chai.request(dkServer).close();
// function callback(err, res,done){
//     //expect(res).to.have.status(200);
//     console.log(res.text);
//     expect(res.text).to.eql("Hello DK");
//     //expect(res.body).to.eql('Hello DK');
//     done();
    
// }