import numForm from "../tools/numform.js"

class Cards {

    static cardCoRecomend( contain, img, name, join ) {
        contain.innerHTML += `
            <div class="wall-B">
                <div class="img-text">
                    <img src="${img}" alt="">
                    <div class="text-contain">
                        <h2>${name}</h2>
                        <h3>${join}</h3>
                    </div>
                </div>
                <button>Join Now</button>
            </div>
        `
    }

    static cardCoFavorite( contain, name, npost ){

        const div = document.createElement("div")
        div.className = "wall-C"
        div.innerHTML += `
            <img src="../../assets/Vector 1-1.jpg" alt="" class="img-like-flat">
            <h2>${ name }</h2>
            <footer>
                <div class="img">
                    <img src="../../assets/Rectangle 29.jpg" alt="">
                    <img src="../../assets/Rectangle 29.jpg" alt="">
                    <img src="../../assets/Rectangle 29.jpg" alt="">
                </div>
                <button>${ npost } new post</button>
            </footer>
        `
        contain.appendChild( div )
    }

    static cardMessage( contain, name, join, nms ){
        contain.innerHTML +=`
            <div class="wall-B">
                <div class="img-text">
                    <img src="../../assets/Rectangle 43.jpg" alt="">
                    <div class="text-contain">
                        <h2>${ name }</h2>
                        <h3>${ join }</h3>
                    </div>
                </div>
                <div class="time-num-message">
                    <h4>14:03</h4>
                    <h4 class="num">${ nms }</h4>
                </div>
            </div>
        `
    }

    static cardProFavorite( contain, name, join,  json ){

        let { img, likes : nlike, messages : nmessage, sends : nsend,
            isLike, isMessage, isSend} = json

        const div = document.createElement("div")
        document.createTextNode
        div.className = "wall-A"

        nlike = numForm( nlike )
        nmessage = numForm( nmessage )
        nsend = numForm( nsend )

        div.innerHTML +=`<header>
                <div class="img-name">
                    <img src="https://res.cloudinary.com/photenix/image/upload/v1658425725/pets/pj/Rectangle_48_geihp7.png" alt="">
                    <div class="text">
                        <h2>${ name }</h2>
                        <h3>${ join }</h3>
                    </div>
                </div>
                <i class="bi bi-bookmark" id="save"></i>
            </header>
            <div class="bg-img">
                <img src=${ img } alt="">
            </div>
            <div class="li-ms-se">
                <button class="li" id="like">
                    <i class="bi bi-heart"></i>
                    <h3>${ nlike }</h3>
                </button>
                <button class="ms" id="message">
                    <i class="bi bi-chat"></i>
                    <h3>${ nmessage }</h3>
                </button>
                <button class="se" id="send">
                    <i class="bi bi-send"></i>
                    <h3>${ nsend }</h3>
                </button>
            </div>
        `
        //------ book mark ------//
        const save = div.querySelector( "#save" )
        save.addEventListener( "click", () =>{
            if( save.className == "bi bi-bookmark") save.className = "bi bi-bookmark-fill"
            else { save.className = "bi bi-bookmark" }
        })

        //------ button ------//
        const btnlike = div.querySelector( "#like" )
        const lk = btnlike.querySelector("i")
        if( isLike ) lk.className = "bi bi-heart-fill"
        btnlike.addEventListener( "click", () =>{
            if( lk.className == "bi bi-heart") lk.className = "bi bi-heart-fill"
            else { lk.className = "bi bi-heart" }
        })

        const btnmessage = div.querySelector( "#message" )
        const ms = btnmessage.querySelector("i")
        if( isMessage ) ms.className = "bi bi-chat-fill"
        btnmessage.addEventListener( "click", () =>{
            if( ms.className == "bi bi-chat") ms.className = "bi bi-chat-fill"
            else { ms.className = "bi bi-chat" }
        })

        const btnsend = div.querySelector( "#send" )
        const snd = btnsend.querySelector("i")
        if( isSend ) snd.className = "bi bi-send-fill"
        btnsend.addEventListener( "click", () =>{
            if( snd.className == "bi bi-send") snd.className = "bi bi-send-fill"
            else { snd.className = "bi bi-send" }
        })

        contain.appendChild( div )
    }
}

export default Cards 