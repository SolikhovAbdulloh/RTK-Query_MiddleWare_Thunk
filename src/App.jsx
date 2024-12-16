import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, fetchData, increment } from './redux/counter';
import { useCreatePostMutation ,useGetPostsQuery,useDeletePostMutation} from './redux/api';
function App(){

const dispacht = useDispatch()
// const {count , data , loading ,error} = useSelector((state) => state.counterSlice); 

const {data:users , error ,isLoading} = useGetPostsQuery()
 


// useEffect(()=>{
//   dispacht(fetchData())
// },[])

  return (
    <div className="w-[90%] justify-center mt-[10vh] items-center flex gap-2 m-auto">
      <button
        className="w-[100px] h-[40px] bg-[green]"
        onClick={() => dispacht(increment())}
      >
        +
      </button>
      <span>{count}</span>
      <button
        className="w-[100px] h-[40px] bg-[green]"
        onClick={() => dispacht(decrement())}
      >
        -
      </button>
      <br />
      {/* <button className='w-[100px] h-[40px] bg-[red]' onClick={()=>dispacht(fetchData())}> Get Data</button> */}
      {/* {loading ? <p>Loading...</p> : <pre>{JSON.stringify(data,null,1)}</pre>} */}
      
    </div>
  );
}

export default App