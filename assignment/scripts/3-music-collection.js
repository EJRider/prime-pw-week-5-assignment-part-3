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

addToCollection('Dark Side of the Moon', 'Pink Floyd', 1973);

addToCollection('Danger Days', 'My Chemical Romance', 2010);

console.log(collection);