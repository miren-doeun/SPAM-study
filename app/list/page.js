import { connectDB } from "@/util/database.js"
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      {
        result.map((a, i)=>
          <div className="list-item">
            <Link prefetch={false} href={'/detail/' + result[i]._id}><h4>{a.title}</h4></Link>
            <Link prefetch={false} href={'/edit/'+result[i]._id}>✏️</Link>
            <p>11</p>
          </div>
        )
      }
    </div>
  )
}