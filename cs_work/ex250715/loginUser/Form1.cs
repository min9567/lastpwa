using MaterialSkin;
using MaterialSkin.Controls;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace loginUser
{
    public partial class Form1 : MaterialForm
    {
        public Form1()
        {
            InitializeComponent();

            var materialSkinManager = MaterialSkinManager.Instance;
            materialSkinManager.AddFormToManage(this);
            materialSkinManager.Theme = MaterialSkinManager.Themes.LIGHT;
            materialSkinManager.ColorScheme = new ColorScheme(Primary.Blue300, Primary.Blue700, Primary.BlueGrey500, Accent.LightBlue200, TextShade.WHITE);

            this.Text = "UserManager";

            button1.Font = new Font("맑은 고딕", 14, FontStyle.Bold);
            button2.Font = new Font("맑은 고딕", 14, FontStyle.Bold);
            button3.Font = new Font("맑은 고딕", 14, FontStyle.Bold);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            registerPanel.Controls.Clear();
            UserControl1 uc1 = new UserControl1();

            uc1.Dock = DockStyle.Fill;

            registerPanel.Controls.Add(uc1);
        }

        private void button2_Click(object sender, EventArgs e)
        {
            registerPanel.Controls.Clear();
            UserControl2 uc2 = new UserControl2();

            uc2.Dock = DockStyle.Fill;

            registerPanel.Controls.Add(uc2);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            registerPanel.Controls.Clear();
            UserControl3 uc3 = new UserControl3();

            uc3.Dock = DockStyle.Fill;

            registerPanel.Controls.Add(uc3);
        }
    }
}
