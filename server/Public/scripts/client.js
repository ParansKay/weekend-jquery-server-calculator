$( document ).ready( onReady );

function onReady() {
    console.log( 'JQ' );
    $( `#plusButtonIn` ).on( 'click', inAddition );
    $( `#minusButtonIn` ).on( 'click', inSubtraction );
    $( `#timesButtonIn` ).on( 'click', inMultiplication );
    $( `#divideButtonIn` ).on( 'click', inDivision );
    $( `#equalsButtonIn` ).on( 'click', inCalcMode );
    $( `#calibrateButtonIn` ).on( 'click', inCalibration );
    getResponses();
} //end onReady

let operator = '';
/////////////////
// checking all my buttons //
function inAddition(){
    operator = '+';
    console.log( ' in Addition!', operator );
} //end inAddition

function inSubtraction(){
    operator = '-';
    console.log( 'in subtraction!', operator );
} // end inSubtraction

function inMultiplication(){
    operator = '*';
    console.log( 'in multiplication!', operator );
} //endinMultiplication

function inDivision(){
    operator = '/';
    console.log( 'in division!', operator );
} //end inDivision

function inCalcMode(){
    console.log( 'Calculating!' );
    let numsToSend = {
        num1: $(`#firstNumIn`).val(),
        operator1: operator,
        num2: $(`#secondNumIn`).val()
    }
    console.log( 'numbers to send are:', numsToSend );
    $.ajax({
        method: 'POST',
        url: '/5000',
        data: numsToSend
    }).then(function (response) {
        console.log('back from post:', response);
    }).catch(function (err) {
        alert('something is no workie in numsArray');
        console.log(err);
    })
} //end inCalcMode

function inCalibration(){
    console.log( 'Calibrating!' );
    let el1 = $(`#firstNumIn`);
    el1.val('');
    // el1.append(`#firstNumIn`);
    let el2 = $(`#secondNumIn`);
    el2.val('');
    // el2.append(`#secondNumIn`);
} // end inCalibration

////////////////
function getResponses(){
$.ajax({
    method: 'GET',
    url: '/5000'
} )
} // end getResponses

