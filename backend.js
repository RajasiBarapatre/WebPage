
const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementsByClassName('feedback');
function sendEmail()
{
  const ebody=`Name: ${name1.value}
  <br>
  Email : ${email.value}
  <br>
  Message: ${message.value}`;
  Email.send(
    {
      Host : "smtp.elasticemail.com",
      Username : "rajasibarapatre123@gmail.com",
      Password : "853F7225AD4A6C4C0398325E420A32BBFC99",
      To : 'rajasibarapatre123@gmail.com',
      From : 'rajasibarapatre123@gmail.com',
      Subject : "tried to contact from" + email.value,
      Body : ebody
    }).then(
          message => alert(message)
          );
  console.log(ebody)
}
const searchtext = document.getElementById('searchbar');
function doSearch()
{
  if (window.find(searchtext)) 
  {
    console.log(window.find(searchtext));
  }
  else
  {
    alert("Product Not Found!");
  }
}