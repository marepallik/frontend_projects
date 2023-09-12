
const API_URL = "5c7dc2b162d7a221d9d830ef2449a4e6";

const countryInput = document.querySelector("#country-input");

const countryInfo = document.querySelector(".country-info");

countryInput.addEventListener("change", function() {

    const countryCode = countryInput.value;

    fetch(`${API_URL}${countryCode}`)

        .then(response => response.json())

        .then(data => {

            countryInfo.innerHTML = `

                <h2>Country Information</h2>

                <p>Name: ${data.name}</p>

                <p>Capital: ${data.capital}</p>

                <p>Population: ${data.population}</p>

                <p>Region: ${data.region}</p>

                <p>Subregion: ${data.subregion}</p>

            `;

        });

});