let newQoute=document.getElementById('newQuote');
let newQuoteText=document.getElementById('newQuoteText');
let  newQuoteCategory=document.getElementById('newQuoteCategory');
let btnExport=document.getElementById('btnExport');
let storedQuote=JSON.parse(localStorage.getItem('quote'))||[];
const quoteDisplay=document.getElementById('quoteDisplay')

console.log(storedQuote)


function addQuote(){

  if(newQuoteText.value!=null && newQuoteCategory.value)
     {
              let quote={ };
              quote.text=newQuoteText.value;
              quote.category=newQuoteCategory.value;
                
              storedQuote.push(quote)

             localStorage.setItem('quote',JSON.stringify(storedQuote));
             
            }
            else{
              alert('Enter information')
            }


}

function showRandomQuote(){


  let i=Math.floor(Math.random()*storedQuote.length);
  
  let randomQuote=storedQuote[i];

   let h2=document.createElement('h2');
   let p=document.createElement('p');
    h2.innerHTML=randomQuote.category;
    p.innerHTML=randomQuote.text;
  
    quoteDisplay.appendChild(h2);
    quoteDisplay.appendChild(p);

    //Exporting Data

}


function exportToJsonFile(){
  const a=document.createElement('a');
  const myBlob=new Blob(storedQuote,  {type:"application/json"})
  const jsonObjectUrl = URL.createObjectURL(myBlob);
  a.href=jsonObjectUrl;

  const fileName="quotes.json"
  a.download=fileName;


}

function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
  };
  fileReader.readAsText(event.target.files[0]);
}


function createAddQuoteForm(){
  
}

let categoryFilter=document.getElementById('categoryFilter');

function filterQuotes(){

}

function populateCategories(){
  let filteredArray=[...new Map(storedQuote.map(item=>[item['category'], item]))]


  filteredCategories=filteredArray.forEach(element=>{returnelement.category})
    filteredCategories.forEach(element=>{
      let option =document.createElement('option')
      option.textContent=element;
    })
 
}
newQoute.addEventListener('click',showRandomQuote)
btnExport.addEventListener('click',exportToJsonFile)
