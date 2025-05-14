// require() => commonjs BackEnd
// import from => module.js FrontEnd
import { createInterface } from 'readline/promises';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ylqgjfufnaztduobbywf.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscWdqZnVmbmF6dGR1b2JieXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDgsImV4cCI6MjA1NTAwMTAwOH0.irpw-IkWk6zEEDGYtk473VQT1TzYzuXZntK61C9dRiA";

const supabase = createClient(supabaseUrl, supabasePassword);

const res = await supabase.from('users').select();
console.log(res);

// const res = await supabase.from('users').insert([{name: 'aaa', email: 'aaa@naver.com' }]);

// console.log(res);

// const {status, statusText} = res;

// console.log(status);
// console.log(statusText);

// console.log(supabase);

// 

// const rl = createInterface({
//     input : process.stdin,
//     output : process.stdout
// });

// const name = await rl.question('이름뭐냐');
// console.log(`name ${name}`);

// rl.close();
