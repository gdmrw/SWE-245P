console.log('Hello World, I\'m script.js!');

const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
   ]

const result = books.filter((word) => books.length > 6);

function filterBytitle(books) {
    if (books.title == 1984) {
      return false;
    }
    return true;
}  

const bookfilter = books.filter(filterBytitle)
  
console.log(bookfilter)

function filterBytitle2(books) {
    if (books.title == 1984 || books.author == 'Herman Melville') {
      return false;
    }
    return true;
}  


const bookfilter2 = books.filter(filterBytitle2)

console.log(bookfilter2)

document.getElementById('setColorButton').onclick = function() {
    document.getElementById('content').style.color = 'blue';
};

function updateContent() {
    document.getElementById('content').innerHTML = 'Bye-Bye World';
}
  // Assuming you have a button with an id 'updateButton' in your HTML  

document.getElementById('updateButton').onclick = updateContent;



