export default function returnInit(){
    try{
        document.getElementById("return-init").addEventListener("click",() =>{
            let re = /Pet_Work/
            let whereiam= re.test(document.location.pathname) 
                ?"/Pet_Work/" 
                :"../.."
            document.location.pathname = whereiam
        })
    }catch( err ){
    }
}