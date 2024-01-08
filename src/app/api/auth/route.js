import dbConnect from "../../../../lib/mongo";
import  User from "../../../../model/User";

export async function GET() {
  return Response.json("auth route");
}
/**
 * @param {import("next").NextApiRequest} request
 * @returns {JSON}
 */

export async function POST(request) {
  try {
    // connecting to database
    await dbConnect();
    const body = await request.json()
    
    // creating a document
    const user = await User.create(body);
    // saving a document
    await user.save();
    return Response.json(user);
  } catch (e) {
    return Response.json({
      status: 400,
      msg: e.message,
    });
  }
}
