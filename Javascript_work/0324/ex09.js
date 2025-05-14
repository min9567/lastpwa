// res.data.user.id
// supabase.auth.getUser();
const res = {
    data: null,
    // {
    //         user:{
    //             id: 1020320
    //         }
    //     }
}

function doA(res) {
    console.log(res.data?.user?.id);
    console.log("정상종료");

    // if(undefined){
    //     innerhtml = '로그인안됨';
    // }
}

doA({});