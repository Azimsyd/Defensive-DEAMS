// function clearError() {
//     error = document.getElementsByClassName('formerror');
//     for (const item of error) {
//         item.innerHTML = '';
//     }
// }
// function seterror(id, error) {
//     element = document.getElementById(id)
//     element.getElementsByClassName('formerror')[0].innerHTML = error;
// }
// function validationform() {
//     var returnval = true;
//     clearError()

//     var name = document.forms['myform']['fname'].value;
//     if (name.length<5) {
//         seterror('name', ' name lemgth is to short');
//         returnval = false;
//     }

//     var email = document.forms['myform']['femail'].value;
//     if (email.length>15) {
//         seterror('email', 'Email lemgth is to short');
//         returnval = false;
//     }

//     var phone = document.forms['myform']['fphone'].value;
//     if (phone.length!=10) {
//         seterror('phone', 'Phone length should be 10 Digit');
//         returnval = false;
//     }

//     var password = document.forms['myform']['fpass'].value;
//     if (password.length!=8) {
//         seterror('pass', 'password length should be 8 Digit');
//         returnval = false;
//     }

//     var cpassword = document.forms['myform']['fcpass'].value;
//     if (cpassword != password) {
//         seterror('cpass', 'password not match');
//         returnval = false;
//     }

//     return returnval;
// }