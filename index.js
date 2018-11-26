let monsterParseData = []
const monsterContainer = document.querySelector("#monster-container")
const allMonsters = "http://localhost:3000/monsters"
const monsters50Limit = 'http://localhost:3000/monsters/?_limit=50_page=1'
const createForm = document.getElementById('monster-form')
const backButton = document.querySelector('.backBtn')
const frontButton = document.querySelector('.forwardBtn')


document.addEventListener("DOMContentLoaded", () => {
  fetch(monsters50Limit, {method: 'GET'})
  .then(function(response) {
    return response.json()
  })
  .then(function(parseResponse) {
    monsterParseData = parseResponse
    return monsterParseData.forEach(function(monster) {
      return monsterContainer.innerHTML +=
        `<div
          <h2> Name:  ${monster.name} </h2>
          <h2><span>Age:</span> <span>${monster.age}</span></h2>
          <h3> Description: <span>${monster.description} </span> </h3>
          <hr>
      </div>
      `
    })
  })

  createForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e, e.target)
    const monsterNameInput = document.getElementById('monster-name-input')
    const monsterAgeInput = document.getElementById('monster-age-input')
    const monsterDescriptionInput = document.getElementById('monster-description-input')

    fetch(allMonsters,
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
        body: JSON.stringify({
          "name": monsterNameInput.value,
          "age": monsterAgeInput.value,
          "description": monsterDescriptionInput.value
        })
        })
        .then(function(newResponse) {
          return newResponse.json()
        })
        .then(function(parsedResponse) {
          monsterContainer.innerHTML +=   `<div
              <h2> Name:  ${parsedResponse.name} </h2>
              <h2><span>Age:</span> <span>${parsedResponse.age}</span></h2>
              <h3> Description: <span>${parsedResponse.description} </span> </h3>
              <hr>
          </div>
          `
        })
    })

    frontButton.addEventListener('click', function(e) {
      console.log(e)
    })

  // }

    // createForm.addEventListener('submit', function(e) {
    //   const submitButton = document.getElementById('submitButton')
    //   e.preventDefault(console.log)


}) //end of DOM loader
