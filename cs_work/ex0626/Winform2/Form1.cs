using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Net.Mime.MediaTypeNames;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Winform2
{
    public partial class Form1 : Form
    {
        int num = 10;
        public Form1() // 생성자
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (textBox1.Text != "")
            {
                int textboxvalue = int.Parse(textBox1.Text);
                num = textboxvalue;
                textBox1.Text = "";
            }
            num++;
            label2.Text = num.ToString();
        }

        private void label2_Click(object sender, EventArgs e)
        {
            Console.WriteLine("출력");
        }
    }
}
