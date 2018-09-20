var l1 = [' is look good', ' is look cool', ' is look smart', ' is look handsome', ' is look hero'];
var l2 = [' เป็นคนดี', ' เป็นเด็กเลว', ' เป็นโจร', ' เป็นโคอี', ' เป็นนักศึกษา'];

function myFunction() {
    var name = document.getElementById('input').value;
    if (name.length > 0) {
        if (document.getElementById('lang1').checked) {
            var ranl1 = l1[Math.floor(Math.random()*l1.length)];
            document.getElementById('gen-text').innerHTML = name + ranl1;ห
        } else if (document.getElementById('lang2').checked) {
            var ranl2 = l2[Math.floor(Math.random()*l2.length)];
            document.getElementById('gen-text').innerHTML = name + ranl2;
        }
        else {
            alert('Please check the button');
        }
    }
    else {
        alert('Please enter the name');
    }
}