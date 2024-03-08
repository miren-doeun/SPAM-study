'use client'
import {useState} from "react"
export default function list() {
  let 상품=['Tomatose', 'pasta', 'Coconut']
  let [수량,수량변경]=useState([0,0,0])
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        상품.map((a,i)=>{
          return(
            <div className="food" key={i}>
              <img src={`/food${i}.png`} className="food-img"/>
              <h4>{a} $40</h4>
              <span>{수량[i]}</span>
              <button onClick={()=>{
                let copy=[...수량]
                copy[i]++
                수량변경(copy)
              }}>+</button>
              <button onClick={()=>{
                let copy=[...수량]
                copy[i]--
                수량변경(copy)
              }}>-</button>
            </div>
          )
        }) }
    </div>
  );
}