const trelloKey = '5835545282ed64966b99051d082144ed';
const trelloToken = '35bdc886d0e6d1230dfd2327ce6f39bb66bd0fceaeda6326728a123fd9ba4062';


document.getElementById("create").addEventListener("click", function(event){
    event.preventDefault()
    let board = document.getElementById('Board').value;
    let list = document.getElementById('List').value;
    let card = document.getElementById('Card').value;
    console.log(board)
    console.log(list)
    console.log(card)

fetch(`https://api.trello.com/1/boards/?key=${trelloKey}&token=${trelloToken}&name=${board}`, {method: 'POST'})
  .then(response => {
    console.log(
      `Response: ${response.status} ${response.statusText}`
    );
    return response.json();
  })
  .then((data) => {
    console.log(data)
    let idBoard = data.id;
    
    fetch(`https://api.trello.com/1/lists?key=${trelloKey}&token=${trelloToken}&name=${list}&idBoard=${idBoard}`, {method: 'POST'})
    .then(response => {
        console.log(
            `Response: ${response.status} ${response.statusText}`
    );
    return response.json();
  })
  .then((data) => {
    txt = document.getElementById('sucess list');
    txt.innerHTML = `<p>the list ${data.name} has been created successfully</p>`;
  })
  .catch(err => console.error(err));
    txt = document.getElementById('sucess board');
    txt.innerHTML = `<p>the board ${data.name} has been created successfully</p>`;
  })
  .catch(err => console.error(err));
  });

