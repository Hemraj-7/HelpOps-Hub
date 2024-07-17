import Blogs from "@utils/models/blog";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import user from "@utils/models/user"; // Importing Mongoose model for newsletter subscription

export async function POST(req) {
    const { id } =await req.json();
    const { MONGO_URI } = process.env;

    await mongoose.connect(MONGO_URI);

    try {
        const blog = await Blogs.findById(id);
        let user;
       
        if (blog) {
            console.log('sdddddddddddddddddddddddddddddddddddddddd',blog)
            return NextResponse.json(blog);
        } else {
            return NextResponse.json({ message: "Blog not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error in GET /api/blog/[id]:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}


