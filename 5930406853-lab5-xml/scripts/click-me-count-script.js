var count = 1;

var para = document.querySelector('button');

para.addEventListener('click', createParagraph);

function createParagraph() {
    document.getElementsByTagName('p')[0].innerHTML = 'You clicked the button for ' + count + ' times';
    count += 1;
}