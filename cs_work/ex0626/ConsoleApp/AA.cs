using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    // namespace 클래스들을 선언가능
    // 클래스 안에 함수들을 선언가능
    // AA 클래스 안에 doA 함수가 있다
    // public : 다른곳에서 사용가능하다

    public class AA
    {
        public void doA()
        {
            Console.WriteLine("AA doA 함수");
        }
        public static void doB()
        {
            Console.WriteLine("AA doB 함수");
        }
    }
}
