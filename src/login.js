
function login()
{
    var uname=document.getElementById("email").value;
    var pass1=document.getElementById("pwd").value;

    if(uname =='')
    {
    alert('Enter the valid email/username');
    }
    else if(pass1 =='')
    {
        alert('Enter the valid password');
    }
    else
    {
        alert('Thank you for login');
    }

}
function signup()
{
    var newpage=document.getElementById("signin").value;
}