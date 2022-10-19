let searchInputElement = document.querySelector("#search-input")
let searchButtonElement = document.querySelector("#search-button")
let searchResultsElement = document.querySelector("#search-results")
let searchOptionsElement = document.querySelector("#search-options")

searchButtonElement.addEventListener("click",
  function() {
    let searchQuery = searchInputElement.value
    search(searchQuery)
  }
)

function search(search, type) {
  let baseUrl = "https://www.loc.gov"
  let parameters = "fo=json&q=" + encodeURIComponent(search)
  let fullUrl = baseUrl + type + "?" + parameters

  fetch(fullUrl).then( function(response) {
    if (response.ok) {
      return response.json()
    }
    else {
      throw new Error("Error")
    }
  }).then( function(data) {
    console.log(data)
    for (i=0; i < data.results.length; i++) {
      let result = data.results[i]
      
      let title = result.title
      let readMoreLink = result.url

      let enclosingElement = document.createElement("div")
      let headerElement = document.createElement("div")
      
      headerElement.textContent = title
      
      enclosingElement.appendChild(headerElement)
      searchResultsElement.appendChild(enclosingElement)
    }
  }
)}