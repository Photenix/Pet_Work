import { getProfilePost, getProfileUser } from "./helpers/CRUD.js"
import Cards from "./modules/Cards.js"
import numForm from "./tools/numform.js"

const txtFollowin = document.getElementById("following")
const txtFollowers = document.getElementById("followers")
const txtProfileName = document.getElementById("profile-name")
const txtProfileJoin = document.getElementById("profile-join")

const imgProfile = document.getElementById("profile-img")

const favoriteContain = document.getElementById("profile-contain")


async function callPost(){
    const posts = await getProfilePost()

    const nameTest = "Sofia Cairo"
    const joinTest = "Trabajadora de tienda mascotas"

    posts.forEach(element => {
        //const { likes, messages, sends, img, isLike, isMessage, isSend } = element
        Cards.cardProFavorite( favoriteContain, nameTest, joinTest, element )
    });
}

async function callUser() {
    const { name, profession, following, followers, img } = await getProfileUser()
    
    txtFollowin.innerText = numForm( following )
    txtFollowers.innerText = numForm( followers )
    txtProfileName.innerText = name
    txtProfileJoin.innerText = profession
    imgProfile.src = img
}

callUser()

callPost()