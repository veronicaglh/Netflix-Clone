import { BASE_URL, API_KEY, IMAGE_URL } from "./constants.js";
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

const actionListView = document.querySelector(".SuspensfulTVShows");
const adventureShowListView = document.querySelector(".AdventureTVShows");
const animationShowListView = document.querySelector(".AnimationTVShows");
const comedyShowListView = document.querySelector(".ComedyTVShows");
const crimeShowListView = document.querySelector(".CrimeTVShows");
const documentaryShowListView = document.querySelector(".DocumentaryTVShows");
const dramaShowListView = document.querySelector(".DramaTVShows");
const familyShowListView = document.querySelector(".FamilyTVShows");
const fantasyShowListView = document.querySelector(".FantasyTVShows");
const historyShowListView = document.querySelector(".HistoryTVShows");
const horrorShowListView = document.querySelector(".HorrorTVShows");
const musicShowListView = document.querySelector(".MusicTVShows");
const mysteryShowListView = document.querySelector(".MysteryTVShows");
const romanceShowListView = document.querySelector(".RomanceTVShows");
const scienceShowListView = document.querySelector(".ScienceFictionTVShows");
const tvShowListView = document.querySelector(".TVMovieTVShows");
const thrillerShowListView = document.querySelector(".ThrillerTVShows");
const warShowListView = document.querySelector(".WarTVShows");
const westernShowListView = document.querySelector(".WesternTVShows");



let actionhtml = "";
let adventurehtml = "";
let animationhtml = ""; 
let comedyhtml = ""; 
let crimehtml = ""; 
let documentaryhtml = ""; 
let dramahtml = ""; 
let familyhtml = ""; 
let fantasyhtml = ""; 
let historyhtml = ""; 
let horrorhtml = ""; 
let musichtml = ""; 
let mysteryhtml = ""; 
let romancehtml = ""; 
let sciencehtml = ""; 
let tvhtml = ""; 
let thrillerhtml = ""; 
let warhtml = ""; 
let westernhtml = ""; 



// requests that will be needed to fetch movie data
const requests = {
    fetchGenreList: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`,
    fetchPlayingNowList: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,       
  };


//For Alternating Background (Main)


// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
} 


fetch(requests.fetchPlayingNowList)
.then((res) => res.json())
.then((data) => {
// every time the page reloads the movie will change 
const setMovie = data.results[Math.floor(Math.random() * 20)];
console.log(setMovie);
var banner = document.querySelector(".SectionOne_Container");
var banner_title = document.getElementById("banner__title");
var banner__desc = document.getElementById("banner__description");
banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
banner__desc.innerText = truncate(setMovie.overview, 150);
banner_title.innerText = setMovie.title;
})



//For Movie Posters 
fetch(requests.fetchGenreList)
.then(res => res.json()) 
.then(data => 
    data.genres.forEach(genre => {
        getResponseDetails(genre.id, genre.name);
    })) 

    
const getResponseDetails = (generId, genreName) => {
        fetch(`${BASE_URL}/genre/${generId}/movies?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            addHtmlForAllGenre(genreName, data.results);
        })
        .catch(error => console.log(error));
    }
    
const addHtmlForAllGenre =(genreName, data) => {
    if (genreName == "Action"){
        actionhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              actionhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;     
        })
        actionhtml += `<br>`
        actionListView.innerHTML = actionhtml;  
      
    } 


    //For Adventure Genre
    else if (genreName == "Adventure"){
        adventurehtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              adventurehtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        adventureShowListView.innerHTML = adventurehtml;  
      } 
    

    //For Animation Genre
    else if (genreName == "Animation"){
        animationhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              animationhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        animationShowListView.innerHTML = animationhtml;  
    } 


    //For Comedy Genre 
    else if (genreName == "Comedy"){
        comedyhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            comedyhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;  
        })
        comedyShowListView.innerHTML = comedyhtml;    
    } 
    
    
    //For Crime Genre
    else if (genreName == "Crime"){
        crimehtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            crimehtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        crimeShowListView.innerHTML = crimehtml;    
    } 


    //For Documentary Genre
    else if (genreName == "Documentary"){
        documentaryhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            documentaryhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        documentaryShowListView.innerHTML = documentaryhtml;   
    } 
    
    
    //For Drama Genre 
    else if (genreName == "Drama"){
        dramahtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            dramahtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;  
        })
        dramaShowListView.innerHTML = dramahtml;  
    } 
    

    //For Family Genre
    else if (genreName == "Family"){
        familyhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            familyhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;  
        })
        familyShowListView.innerHTML = familyhtml;   
    } 


    //For Fantasy Genre
    else if (genreName == "Fantasy"){
        fantasyhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              fantasyhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        fantasyShowListView.innerHTML = fantasyhtml;  
      } 

    
    //For History Genere
    else if (genreName == "History"){
        historyhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              historyhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        historyShowListView.innerHTML = historyhtml;   
    } 

    

    //For Horror Genre
    else if (genreName == "Horror"){
        horrorhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
           horrorhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        horrorShowListView.innerHTML = horrorhtml;  
    } 

    
    //For Music Genre
    else if (genreName == "Music"){
        musichtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            musichtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`; 
        })
        musicShowListView.innerHTML = musichtml;   
    } 

    
    //For Mystery Genre 
    else if (genreName == "Mystery"){
        mysteryhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            mysteryhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
        })
        mysteryShowListView.innerHTML = mysteryhtml;  
      
    } 

    
    //For Romance Genre 
    else if (genreName == "Romance"){
        romancehtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            romancehtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;  
        })
        romanceShowListView.innerHTML = romancehtml;  
    } 

        
    //For Science Fiction Genre 
    else if (genreName == "Science Fiction"){
        sciencehtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            sciencehtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
        })
        scienceShowListView.innerHTML = sciencehtml;  
      
    } 
    

    //For TV Movie Genre 
    else if (genreName == "TV Movie"){
        tvhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            tvhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;   
        })
        tvShowListView.innerHTML = tvhtml;     
    } 

    

    //For Thriler Genre 
    else if (genreName == "Thriller"){
        thrillerhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
              thrillerhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;  
        })
        thrillerShowListView.innerHTML = thrillerhtml;  
    } 

    

    //For War Genre 
    else if (genreName == "War"){
        warhtml += `<p>${genreName}</p>`
          data.forEach((movies, i)=> {
              warhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
            
        })
        warShowListView.innerHTML = warhtml;      
    } 


    //For Western Genere 
    else if (genreName == "Western"){
        westernhtml += `<p>${genreName}</p>`;
          data.forEach((movies, i)=> {
            westernhtml += `<img class="Image1" src ="${IMAGE_URL}/${movies.poster_path}" onclick= "()"/>`;
        })
        westernShowListView.innerHTML = westernhtml;  
    } 
}


