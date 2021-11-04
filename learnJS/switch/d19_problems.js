// if (browser === 'Edge') {
//     alert('You`ve got the Edge!')
// } else if (browser === 'Chrome' 
// || browser === 'Firefox' 
// || browser === 'Safari' 
// || browser === 'Opera') {
//     alert('Okay')
// } else {
//     alert('We hope');
// }

const number = +prompt('Enter number 0-3', '');

switch (number) {
    case 0:
        alert('You enter 0');
        break;
    case 1:
        alert('You enter 1');
        break;
    case 2:
    case 3:
        alert('You enter 2 or 3');
        break;
    default:
        alert('You enter some else');
}
