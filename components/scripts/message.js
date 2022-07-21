import { getMessage } from "./helpers/CRUD.js";
import Cards from "./modules/Cards.js";

const contain  =  document.getElementById("message-ms")

async function showMessage(){
    
    const messages = await getMessage()
    
    messages.forEach(element => {
        const { user, join, num} = element
        Cards.cardMessage( contain, user, join, num)
    });
   
}

showMessage()