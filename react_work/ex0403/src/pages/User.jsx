import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { signUp } from "../jsclib/supa";
import Swal from 'sweetalert2'

function User() {
  const { userId } = useParams();
  console.log(userId);

//   useEffect(() => {
//     supabase.auth.getUser();
//   }, []);

    const sign = async() => {
        const {date, error} = await signUp('nju9567@gmail.com', '123456');
        console.log(error);
        Swal.fire({
            title: `${date}`,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }

    return(
   <>
   <div>User</div>
   <button onClick={sign}>회원가입</button>
   </>
    );
};

export default User;
