import {useEffect, useRef, useState} from "react";
import productApi from "./api/productApi";

function App() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    // const fetchPosts = async () => {
    //   try {
    //     const params = {userId: 1}
    //     const response = await  productApi.getAll(params)
    //     console.log(response)
    //   } catch (err){
    //     console.log(err)
    //   }
    // }
    // fetchPosts()
      const params = {userId: 1}
    productApi.getAll(params)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
