//2.Show examples of use of splice method to add and remove elements from array.

var games=["Temple Run","Subway Surfers","Fruit Ninja", "shadow Fight"];// an array
console.log("initial array",games);
var removedContent=games.splice(1,0,"PUBG");// 1 element inserted at index 1 without removal
console.log("current Array",games);
console.log("deleted items",removedContent);
removedContent=games.splice(2,2,"solitaire","Minesweeper","COD");// removed 2 elements from index 2 and inserted 3 elements
console.log("current Array",games);
console.log("deleted items",removedContent);
removedContent=games.splice(2,2);// removed 2 elements from index 2
console.log("current Array",games);
console.log("deleted items",removedContent);



