//UI vars
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Input Event
function inputevent(e){
    console.log('Hello');
    e.preventDefault();
}
search.addEventListener('input', (inputevent));