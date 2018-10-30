//5.Write a function that takes object as input and prints all keys and values in a valid JSON format

var data={// test data
    name: 'test',
    age: 20,
    email: 'testyo@pmail.com',
    subjects: ['A1', 'A2', 'B1', 'B2'],
    cgpa: 8.25
    };
    jsonIterator(data);
    function jsonIterator(inputObj){
        for(let key in data ){ // iterating through object keys
            console.log(key +": "+ data[key]);
        }    
    }
    
