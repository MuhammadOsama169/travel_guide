import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma';

//create a post

export async function POST(request: Request) {
  const data = await request.json();
  const { title, content, userId } = data;

  let user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    // If the user doesn't exist, create a new user
    user = await prisma.user.create({ data: { id: userId } });
  }
  try{
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: user.id,
      },
    });

    return NextResponse.json(post);
  }catch(err){
    console.log(err)
  }
}

// Get all posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include:{
        user:true
      },
      orderBy:{
        createdAt:'desc'
      }
    });
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
