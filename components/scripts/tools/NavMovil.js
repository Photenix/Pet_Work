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

    let navOption = {
        home : "../..",
        message : "/components/pages/message.html",
        notification : "/components/pages/communities.html",
        profile : "/components/pages/profile.html",
    }

    const location = document.location.pathname

    if( location == "/"){
        navOption["home"] = "."
    }

    for (const key in navOption) {
        const selectionNav = navMovil.querySelector(`#nav-${key}`)
        selectionNav.addEventListener("click",() =>{
            document.location.pathname = navOption[key]
        })
    }
}

export { lightNavMovil, selectNavMovil }