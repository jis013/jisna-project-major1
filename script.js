/*const hi=document.getElementById("h1")

                  function addItem(event)
                  {
                        event.preventDefault();
                        let newItem=itemInput.value
                        console.log("hello");
                        const li=document.createElement('li')
                         const button=document.createElement('button')
                       const icon=document.createElement('i')
                        li.appendChild(document.createTextNode(newItem))

                   button.classList="remove-list btn-link text-"

                  console.log(li);
                  
                  }*/

/*
const form= document.getElementById("item-form");
const itemInput= document.getElementById("item-iput");
const itemList= document.getElementById("item-list");
const clear= document.getElementById("clear");
const filter= document.getElementById("filter");


function addItem(event){
  event.preventDefault();

  let newItem = itemInput.value

  //console.log(newItem)

const li= document.createElement("li");
const button= document.createElement("button");
const icon= document.createElement("i");

li.appendChild(document.createTextNode);
}




                  function filterItems(e){
                    const  items =document.querySelectorAll('il')

                    const text=e.targrt.value;
                    items.forEach(items) =>{
                      const itemName =
                    }

                  }
*/






const loadAPI = () =>{
  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data)=> console.log (data))}

  const getProducts=(product){

         return 'hello'
  }
  const getProducts = (products) => {
    const displayUI=product.map(product)=> displayProduct(product)
    console.log(displayUI);
    
  }

loadAPI()