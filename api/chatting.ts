export type ApiTpye = {
    id: string,
    userSays: string[],
}

const url = "https://jsonserrver.onrender.com/convo";

export async function getUsers() : Promise<ApiTpye[]>{
    
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error (`Server error | fetching failed | ${response.status}`);
        }
        const data : ApiTpye[] = await response.json();
        console.log("data:"+data);
        
        return data;
        
    }catch(err){
        console.log("failed try:" + err);
        throw err;
    }
}

export async function pushText( userSays : string[]){

    try{
        const response = await fetch(url, {
            method: "POST",
            headers : {
                 "Content-Type": "application/json"
            },
            body: JSON.stringify({userSays})
        })
        
    }catch(err){
        console.log("failed post try: ", err);
    }
}

export async function updateChat(userSays : string[]){

    try{
        const urlExtended = `${url}/chat`;
        const response = await fetch(urlExtended, {
            method: "PUT",
            headers : {
                 "Content-Type": "updating"
            },
            body: JSON.stringify({userSays})
        })
        
    }catch(err){
        console.log("failed post try: ", err);
    }
}