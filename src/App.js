import logo from './logo.svg';
import './App.css';
import {AiOutlinePlus} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';

function App() {
  
  const [things,setThings]=useState([{work:"first thing",status:false}])
  const [displayThings,setDisplayThings]=useState(things)
  const [displaymode,setDisplaymode]=useState(0)

  useEffect(()=>{
    ( displaymode === 0 ) ? setDisplayThings( things )
     : (( displaymode === 1 ) ? setDisplayThings(th =>  { let temp=things.filter(single=>{
      if(single.status) return single})
      return temp
     }) :  setDisplayThings(th =>  { let temp=things.filter(single=>{
      if(!single.status) return single})
      return temp
     })  )
  })
  const taskref=useRef("")
  const taskcard=useRef("")
    const addTask=()=>{
      if(taskref.current.value.length){
         setThings([...things,{work:taskref.current.value,status:false}])
         console.log(things)
         setDisplayThings([...displayThings,{work:taskref.current.value,status:false}])
         taskref.current.value="" 
      }
    }
    const toggleTask=(e,oneth)=>{ 
      var temp=things
      temp.map(th=>{
        if(th.work == oneth.work ) {  th.status = !th.status  }
      }) 
      setThings(temp.slice())
      
    }
    const completedtasks=()=>{
      // let temp=things.filter(single=>{
      //      if(single.status) return single
      // })
      // console.log(temp)
      // setDisplayThings(temp)
      setDisplaymode(1)
    }
    const pendingtasks=()=>{
    //   let temp=things.filter(single=>{
    //        if(!single.status) return single
    //   })
    //   setDisplayThings(temp)
    setDisplaymode(2)
    }
    const searchthings=(e)=>{
      
    }
  
  return (
    <div className="App" style={{margin:'5%',padding:'5px',marginLeft:'10%',marginRight:'10%',backgroundColor:'lightseagreen'}}>
      <h1>To Do List</h1>
      <input type="text" placeholder='Add Here' ref={taskref} onChange={e => {searchthings(e)}} style={{width:'50%',borderRadius:'5px'}} />
      <ul className="list-unstyled" >
        
      {
      displayThings?.map(thing =>(
        <li key={thing.work} >
        <label ref={taskcard} style={ (!thing.status) ?{width:'50%',textAlign:'left',backgroundColor:'lightblue',borderRadius:'5px',marginTop:'0.5%',marginLeft:'auto',marginRight:'auto'}
                               :{width:'50%',textDecoration:'line-through',textAlign:'left',backgroundColor:'lightblue',borderRadius:'5px',marginTop:'0.5%',marginLeft:'auto',marginRight:'auto'}
      } >
            <input onChange={(e)=>{toggleTask(e,thing)}} checked={(thing.status) ? true : false} type="checkbox"></input>  {thing.work} </label>
        </li>
      ))}
      </ul>
      <div className='container' style={{backgroundColor:'white',height:'40px',width:'50%',borderRadius:'5px',marginLeft:'auto',marginRight:'auto',textAlign:'left'}} >
       <AiOutlinePlus onClick={addTask} />&nbsp;
       <b style={{fontSize:'1rem'}} >{things.length} items left</b>
       <div style={{float:'right'}} > 
       <button  className='btn btn-outline' onClick={ ()=>{ setDisplaymode(0) } } >All</button>
       <button className='btn btn-outline' onClick={pendingtasks} >Pending</button>
       <button className='btn btn-outline' onClick={completedtasks} >Completed</button></div>
      </div> 
      
    </div>
  );
}

export default App;
