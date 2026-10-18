import {React,Suspense} from 'react';
import Users from './../components/Users';





const userPromise = async()=> {
     const data = await fetch('http://localhost:5000/users');
    return  data.json()
}



const UsersPage = async() => {
   
   
    return (
        <div>
            users comming soon:
           <Suspense fallback={<h2>Loading....</h2>}>
           
           <Users userPromise={userPromise}></Users>

           </Suspense>
        </div>
    );
};

export default UsersPage;