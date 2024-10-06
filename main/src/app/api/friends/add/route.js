export async function POST(req){
    try {
        const body=await req.json()
const RESTResponse=await fetch(`${process.env.UPSTASH_REDIS_REST_URL}/get/user:email${email}`,{
    method:'POST',
    headers:{
        Authorization:`Bearer ${process.env.UPSTASH_REDIS_REST_TOKEN}`,
    },
    cache:'no-cache',
    body:JSON.stringify(body),
    
})
// const data=await RESTResponse.json() as result
    } catch (error) {
        
    }
}