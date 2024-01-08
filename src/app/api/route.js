import User from "../../../model/User"
import dbConnect from "../../../lib/mongo"

export async function GET(){
    return Response.json("Get request")
}

export async function POST(request){
    // connecting to database
    await dbConnect()
    console.log(request?.body)
    // creating a document
    const user = await User.create(request?.body)
    // saving a document
    await user.save()
    return Response.json(user)
}