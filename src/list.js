import Item from './item.js'



var data=[
    { id: 1, title: "Wake up", status: true },
    { id: 2, title: "drink tea", status: false },
    { id: 3, title: "eat maggi", status: true },
    { id: 4, title: "sleep", status: false }
  ]
    export default function List(){
       return(
           <>
           {
               data.map((x)=>(
                <Item item={x.title}/>
               ))
           }
           </>
       )
   }