let newQoute=document.getElementById('newQuote');
let newQuoteText=document.getElementById('newQuoteText');
let  newQuoteCategory=document.getElementById('newQuoteCategory');
let Stoeredquote=JSON.parse(localStorage.getItem('quote'))||[];
const quoteDisplay=document.getElementById('quoteDisplay')


function showRandomQuote(){
quote.forEach(element => {
   let h2=document.createElement('h2');
   let p=document.createElement('p');
    h2.textContent=element.category;
    p.textContent=element.text;

});
    
}

function addQuote(){

  if(newQuoteText.value!=null && newQuoteCategory.value)
     {
              let quote={ };
              quote.text=newQuoteText.value;
              quote.category=newQuoteCategory.value;
                
              console.log(quote)
            }
            else{
              alert('Enter information')
            }


}