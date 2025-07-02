using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //프로그램 시작점
            // 콘솔앱, winfrom 앱
            Console.WriteLine("안녕하세요");

            int a = 10;
            a += 20;
            string c = a + "aaa";
            Console.WriteLine("a = " + a);
            Console.WriteLine("c = " + c);

            Console.WriteLine(57 < 263);
            Console.WriteLine(57 > 263);

            bool isTrue = true;
            bool isFalse = 30 < 20;
            Console.WriteLine(isTrue);
            Console.WriteLine(isFalse);
        }
    }
}
