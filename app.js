
var a;
function takeRate(userRate,id) {
    var i;
    const colorChange = document.querySelector(id);
    document.querySelector('#one').style.backgroundColor = 'hsla(216, 12%, 54%, 0.236)';
    document.querySelector('#two').style.backgroundColor = 'hsla(216, 12%, 54%, 0.236)';
    document.querySelector('#tree').style.backgroundColor = 'hsla(216, 12%, 54%, 0.236)';
    document.querySelector('#four').style.backgroundColor = 'hsla(216, 12%, 54%, 0.236)';
    document.querySelector('#five').style.backgroundColor = 'hsla(216, 12%, 54%, 0.236)';
    colorChange.style.backgroundColor = 'hsla(25, 97%, 53%,.5)';

    a = userRate;
}


function add_a_Rate() {
    const rating_block = document.querySelector(".rating-block");
    const thank_block = document.querySelector(".thank-block-off");

    if(a == undefined)
    {
        alert("You have not select a rating yet !! ");
    }
    else{
        rating_block.classList.toggle('submit-block-disapear');
        thank_block.classList.toggle('thank-block');
        document.querySelector('.selected-rate-message').innerHTML = ("You selected "+a+" of 5");
    }
}

a = undefined;
delete(a);