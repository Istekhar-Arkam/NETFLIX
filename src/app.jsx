import { useEffect,useNavigate } from 'react'
import { onAuthStateChanged } from "firebase/auth";
const App = () => {
const navigate=useNavigate()  
  useEffect(()=>{
onAuthStateChanged(auth, async(user) => {
if(user){
  console.log("Logged In")
  navigate("/netflix")
}else{
  console.log("Logged Out")
  navigate("/netflix/login")
}
})
  },[])
  return (
    <div>A</div>
  )
}

export default App