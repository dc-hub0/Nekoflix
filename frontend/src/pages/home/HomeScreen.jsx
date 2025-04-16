import { useAuthStore } from "../../store/authUser";

 const HomeScreen = () => {
  const { logout } = useAuthStore(); 
   return <div>
       Hello
    <button onClick={logout} className="bg-red-500 text-white p-2 rounded-md">Logout</button>
     </div>
   
 }
 
 export default HomeScreen
 