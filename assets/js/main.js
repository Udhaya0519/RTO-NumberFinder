const inputEl = document.querySelector(".search-input")
const spanEl = document.querySelector(".query-code")
const tableEl = document.querySelector(".result-table")
const resultSection = document.querySelector(".result-section-wrapper")
const noResultPopupEl = document.querySelector(".no-result-popup")

let codeEl = document.querySelector("#code")
let locationEl = document.querySelector("#location")
let typeEl = document.querySelector("#type")
let districtEl = document.querySelector("#district")


let jsonData;



(async () => {
    const responseData = await fetch('./JSON/data.json')
    jsonData = await responseData.json() 
    
})();




inputEl.addEventListener("keyup", (event) => {
        
        if (event.key === "Enter"){
            spanEl.innerText = inputEl.value.toUpperCase()  

            
            let foundData;

            jsonData.forEach( record => {
                if(inputEl.value.toUpperCase() === record.code || inputEl.value.toUpperCase().startsWith(record.code)){
                    foundData = record;
                }
                
            });   

            

            if(foundData){

                tableEl.hidden = false


                codeEl.innerText = foundData.code
                locationEl.innerText = foundData.location
                typeEl.innerText = foundData.type
                districtEl.innerText = foundData.district

                noResultPopupEl.style.display = "none"


            }
            else{
            
                tableEl.hidden = true
                
                noResultPopupEl.style.display = "block"

            }

            
            



        }
})



