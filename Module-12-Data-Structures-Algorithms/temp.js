const searchContainer = document.getElementById(".js-search-container");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const resultsContainer = document.getElementById(".js-results-container");
const limit = document.getElementById("img-count-id");
const apiurl = "http://api.giphy.com/v1/gifs/search";
const apiKey = "rJs1dhQNXII3vND3b8amLn6LwHSb35IW";

// ${"search-btn"}.click(()=>{
//   let userInput = $("#search-box").val();
//   $.ajax({
//     url: apiurl,
//     apiKey: apiKey,
//     q: userInput,
//     limit: limit.value,
//   }).done((res)=> {
//     console.log(res);
//   });
// })

// searchBtn.clicked = function (event) {
//   preventDefault();
//   debugger;
//   let searchDoc = $.ajax({
//     url: apiurl,
//     apiKey: apiKey,
//   }).done(function () {
//     $(this).addClass("done");

//   console.log(searchDoc);
//   });

function searchClicked(event) {
  event.preventDefault();
  // var xhr = $.get(`${apiurl}?q=${searchBox}&api_key=${apiKey}&limit=${limit}`);
  // xhr.done(function (data) {
  //   console.log("success got data", data);

  // let apifetch = fetch(apiurl, { api_key: apiKey })
  // .then(response => response.json())
  // .then(json => console.log(json))
  
  let searchDoc = $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search?q=dog',
    api_key: 'arJs1dhQNXII3vND3b8amLn6LwHSb35IW'

  }).done(function () {
    $(this).addClass("done");
  });
        
  console.log(searchDoc);
  }

  //   event.preventDefault();
  //   debugger;
      
      


searchBtn.addEventListener("click", searchClicked);