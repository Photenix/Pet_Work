const URL = "http://localhost:4000"

async function getMessage(){
    try{
        const message = await axios.get( URL+"/message" );
        return message.data
    }catch( err ){
        console.error( err )
    }
}

async function getProfileUser(){
    try{
        const user = await axios.get( URL+"/profile" )
        return user.data.user
    }catch( err ){
        console.error( err )
    }
}

async function getProfilePost(){
    try{
        const post = await axios.get( URL+"/profile" )
        return post.data.post
    }catch( err ){
        console.error( err )
    }
}


export { getMessage, getProfileUser, getProfilePost }