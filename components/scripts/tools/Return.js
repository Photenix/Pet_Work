export default function returnInit(){
    try{
        document.getElementById("return-init").addEventListener("click",() =>{
            document.location.pathname = "../../"
        })
    }catch( err ){
    }
}