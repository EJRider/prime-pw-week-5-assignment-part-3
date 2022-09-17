console.log('***** Music Collection *****')

let collection = [];


//This function will take Title, Artist, and yearPublished, turn those into an object, then put that object into the collection array. It then returns the newest created object
function addToCollection(title, artist, yearPublished){
    let newTitle = {
        titleName: title,
        artistName: artist,
        published: yearPublished
    };
   collection.push(title); 
   return newTitle;
};

//function showCollection()

console.log(addToCollection('Dark Side of the Moon', 'Pink Floyd', 1973));
console.log(addToCollection('Danger Days', 'My Chemical Romance', 2010));
console.log(addToCollection('Electra Heart', 'Marina and the Diamonds', 2012));
console.log(addToCollection('In Tongues', 'Joji', 2017));
console.log(addToCollection('Three Cheers for Sweet Revenge', 'My Chemical Romance', 2004));
console.log(addToCollection('AAAH!BBA', 'Brian David Gilbert', 2021));

console.log(collection);