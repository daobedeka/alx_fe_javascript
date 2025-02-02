let newQoute=document.getElementById('newQuote');
let newQuoteText=document.getElementById('newQuoteText');
let  newQuoteCategory=document.getElementById('newQuoteCategory');
let storedQuote=JSON.parse(localStorage.getItem('quote'))||[];
const quoteDisplay=document.getElementById('quoteDisplay')


function showRandomQuote(){


  let i=Math.floor(Math.random()*storedQuote.lenght);
  let randomQuote=storedQuote[i];
   let h2=document.createElement('h2');
   let p=document.createElement('p');
    h2.textContent=element.category;
    p.textContent=element.text;


    
}

function addQuote(){

  if(newQuoteText.value!=null && newQuoteCategory.value)
     {
              let quote={ };
              quote.text=newQuoteText.value;
              quote.category=newQuoteCategory.value;
                
              storedQuote.push(quote)
             
            }
            else{
              alert('Enter information')
            }


}