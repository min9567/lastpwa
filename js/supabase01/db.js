import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ylqgjfufnaztduobbywf.supabase.co";
const supabasePassword = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscWdqZnVmbmF6dGR1b2JieXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDgsImV4cCI6MjA1NTAwMTAwOH0.irpw-IkWk6zEEDGYtk473VQT1TzYzuXZntK61C9dRiA";

const supabase = createClient(supabaseUrl, supabasePassword);

export async function user_select() {
    const res = await supabase
        .from('users')
        .select();
    console.log(res);
}

export async function user_insert(name, email) {
    const res = await supabase
        .from('users')
        .insert([{ name, email }]);
    console.log(res);
}

export async function user_update(name, email) {
    const res = await supabase
        .from('users')
        .update({ name })
        .eq('email', email);
    console.log(res);
}

export async function user_delete(email) {
    const res = await supabase
        .from('users')
        .delete()
        .eq('email', email);
    console.log(res);
}