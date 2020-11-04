// Foursquare API Info
const clientId = '4DUL10S4SW0RIVC3R4OU3D2ADZBE1ABICH3YLQAC0YL4NVEI';
const clientSecret = 'WVBO2JROM3F0R2ETORKBVLAUN2SCCGLLTZKCIMPJ05NGBYHL';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';


// OpenWeather Info
const openWeatherKey = 'e1aec79b178ad4c7ec25736e76cd38cc';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const actualDate = (new Date(Date.now()-(new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, 10).replace(/[^0-9]/g, "");
  const urlToFetch = url + 
                     city + 
                     '&limit=10' +
                     '&client_id=' + clientId + 
                     '&client_secret=' + clientSecret +
                     '&v=' + actualDate;
                  

  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
      return venues;
    }
  } catch (error) {
    console.log('Erro na seleção');
    console.log(error);
  }                     
                     
}

const getForecast = async () => {
  const urlToFetch = weatherUrl + 
                    '?&q=' +  $input.val() + 
                    '&APPID=' + openWeatherKey;
  console.log(urlToFetch);
  try {
   const response = await fetch(urlToFetch);
   if (response.ok){
    const jsonResponse = response.json();
    return jsonResponse;
   }
  } catch (error) {
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)