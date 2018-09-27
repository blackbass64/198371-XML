var emailStyle = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    passCheckLetter = /^([0-9])+$/,
    passCheckNum = /^([A-Za-z])+$/;

var subbtn = document.querySelector('button');

subbtn.addEventListener("click", function () {
    var mail = document.getElementById('mail').value,
        pass = document.getElementById('pass').value,
        repass = document.getElementById('repass').value;
    
    if (emailStyle.test(mail)) {
        console.log('email true');
        if (pass.length < 6) {
            alert('Please have at least six characters');
        }
        else if (passCheckLetter.test(pass)) {
            alert('Please have at least one letter');
        }
        else if (passCheckNum.test(pass)) {
            alert('Please have at least one number');
        }
        else if (pass != repass) {
            alert('Password and repeat password need to be the same');
        }
        else {
            console.log('password true');
        }
    } else {
        alert('Please enter a correct email address');
    }
})
