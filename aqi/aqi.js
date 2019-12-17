// JS for AQI Finder

const output = document.getElementById('output');
output.innerHTML = '';
output.style.display = 'none';

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', aqiData);

async function aqiData(e) {
  e.preventDefault();
  const cityInput = document.getElementById('cityInput');
  const city = cityInput.value;
  console.log(city);

  setTimeout(() => {
    output.style.display = 'block';
  }, 1300);

  const response = await fetch(
    `https://api.waqi.info/feed/${city}/?token=6c6ec077b7715bbe31db0d920d73f7c5d57bc4cd`
  ).then(data => data.json());
  console.log(response);

  if (response.status === 'error') {
    output.innerHTML = 'Error!!! Enter Something else';
  } else {
    //City Name
    const cityName = response.data.city.name;
    output.innerHTML = `<p style="font-size:1.5rem"><b>${cityName}</b></p>`;

    //AQI Value=> Background Checker + Description
    const aqiValue = response.data.aqi;
    let description;
    let background;
    if (aqiValue > 300) {
      background = '#7E0023';
      description = 'Hazardous';
    } else if (aqiValue > 200) {
      background = '#660099';
      description = 'Very Unhealthy';
    } else if (aqiValue > 150) {
      background = '#CC0033';
      description = 'Unhealthy';
    } else if (aqiValue > 100) {
      background = '#FF9933';
      description = 'Unhealthy for Sensitive Groups';
    } else if (aqiValue > 50) {
      background = '#FFDE33';
      description = 'Moderate';
    } else {
      background = '#009966';
      description = 'Good';
    }
    //AQI Value
    output.innerHTML += `<h2 style="background-color:${background}"> AQI: ${aqiValue} <br> (${description}) </h2>`;

    //Attributions
    const attr = [];
    const attrurl = [];
    output.innerHTML += '<br>Sources:-<br>';
    for (let i = 0; i < response.data.attributions.length; i++) {
      attr[i] = response.data.attributions[i].name;
      attrurl[i] = response.data.attributions[i].url;
      output.innerHTML += `<a href="${attr[i]}">${attrurl[i]}</a><br>`;
    }
  }
  cityInput.value = '';
}
