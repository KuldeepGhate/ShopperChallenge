
function writeCookie(form){

    validateForm();
    document.cookie = "email=" + form.email.value;
    document.cookie = "fname=" + form.fname.value;
    document.cookie = "lname=" + form.fname.value;
       
}