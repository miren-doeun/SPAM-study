import { connectDB  } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });
    return(
        <div>
            <a href={'/list'}>
                <h4>돌아가기</h4>
            </a>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
        </div>
    )
}