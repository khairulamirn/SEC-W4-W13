// handling the form 
// get the value of word to search in input form 
// console.log(value);
// fetch the data from API - https://api.dictionaryapi.dev/api/v2/entries/en/<word>
// convert the response to json
// console.log the response

const form = document.querySelector("#searchForm");

// form.addEventListener("submit" async function(event) {
//     event.preventDefault();
//     const word = event.target.value[0].value;
//     console.log(word);
//     // template string
//     fetch('https://api.dictionaryapi.dev/api/v2/entries/en/<word>')
//     .then(
//         function (response); {
//             return response.json();
//         })
// })