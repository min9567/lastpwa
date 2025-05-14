// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ylqgjfufnaztduobbywf.supabase.co'; // 너의 Supabase 프로젝트 URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlscWdqZnVmbmF6dGR1b2JieXdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk0MjUwMDgsImV4cCI6MjA1NTAwMTAwOH0.irpw-IkWk6zEEDGYtk473VQT1TzYzuXZntK61C9dRiA'; // Supabase에서 발급한 익명 키

export const supabase = createClient(supabaseUrl, supabaseKey);