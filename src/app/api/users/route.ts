import { NextRequest,NextResponse } from "next/server";
import mysql from 'mysql2/promise';

export async function GET(req: NextRequest){
  try{
    const connection = await mysql.createConnection({
      host:'localhost',
      user:'root',
      password:'',
      database:'db_login',
    });

    const [row] = await connection.query('SELECT * FROM users');
    connection.end();

    return NextResponse.json({success:true,data:row});
  }catch(error){
    console.log('error',error);
    return NextResponse.json({success:false,message:'error'},{status:500})
  }
}