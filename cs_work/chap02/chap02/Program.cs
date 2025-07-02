using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace chap02
{
    internal class Program
    {
        // 프로그램 시작시 항상 존재하는 함수나 변수 static

        // function a(); -> return 아무렇게나 만들수 있다
        // C# jaba 반환값을 개발자가 적어줘야함.
        // void : 리턴값이 없다.

        static void Main(string[] args)
        {
            Console.WriteLine("안녕");


            Console.WriteLine(32.GetType());
            Console.WriteLine(129L.GetType());
            Console.WriteLine(3.14f.GetType());
            Console.WriteLine(3.14.GetType());
            Console.WriteLine(true.GetType());
            Console.WriteLine(false.GetType());
            Console.WriteLine("안녕".GetType());
            Console.WriteLine('A'.GetType());
            Console.WriteLine("안녕".Length); // 문자열의 길이
            Console.WriteLine("안녕".ToUpper()); // 문자열을 대문자로 변환
            Console.WriteLine("안녕".ToLower()); // 문자열을 소문자로 변환
            Console.WriteLine("안녕".Substring(1)); // 문자열의 일부를 추출


            int a = 10;
            double b = 3.14;

            string c = "안녕하세요";
            bool d = true;
            char e = 'A';

            var f = 100; // var는 타입을 자동으로 추론합니다.
            Console.WriteLine(f.GetType());


        }
    }
}
