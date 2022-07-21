const lightNavMovil = () => {
    const title =  document.querySelector("title").innerText.toLowerCase()
    const navMovil = document.getElementById("nav-movil")
    try{
        const selectionNav = navMovil.querySelector(`#nav-${title}`)
        selectionNav.className = "select"
    }catch(err){
        console.error(err);
    }
}

function selectNavMovil () {
    const navMovil = document.getElementById("nav-movil")


    const location = document.location.pathname

    let re = /\/\w+\/\w+\//
    let path;
    try{
        path = location.match(re)[0]
    }catch{
        path = "none" 
    }
    

    let navOption = {
        home : /Pet_Work/.test(document.location.pathname) ?"/Pet_Work/" :"../..",
        message : path + "message.html",
        notification : path + "communities.html",
        profile : path + "profile.html",
    }

    if( location == "/" || location == "/Pet_Work/" ){
        navOption = {
            home : location == "/Pet_Work/" ?"/Pet_Work/" :".",
            message : "components/pages/message.html",
            notification : "components/pages/communities.html",
            profile : "components/pages/profile.html",
        }
    }

    console.log( path, navOption)

    for (const key in navOption) {
        const selectionNav = navMovil.querySelector(`#nav-${key}`)
        selectionNav.addEventListener("click",() =>{
            if( path == "none") document.location.pathname += navOption[key]
            else { document.location.pathname = navOption[key] }
        })
    }

    
}

export { lightNavMovil, selectNavMovil }