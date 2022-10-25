function attachEvents() {
    const getBtn = document.getElementById('submit');
    const location = document.getElementById('location');
    const forecastDiv = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    const weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    getBtn.addEventListener('click', async () => {
        try {
            const response = await fetch(baseUrl + '/locations');
            const locations = await response.json();

            const city = locations.find(({ name }) => name === location.value);
            if (!city) { throw new Error(); }
            const { code } = city;

            const currentData = await getForecast(code, 'today');
            const upcomingData = await getForecast(code, 'upcoming');

            forecastDiv.style.display = 'block';
            createForecast(currentData.forecast, currentData.name);
            createUpcomingForecast(upcomingData.forecast);
        } catch (error) {
            forecastDiv.style.display = 'block';
            forecastDiv.innerHTML = 'Error';
        }
    });

    async function getForecast(code, forecastType) {
        const response = await fetch(`${baseUrl}/${forecastType}/${code}`);
        return await response.json();
    }

    function createForecast(forecast, name) {
        if (current.children[1]) { current.children[1].remove(); }

        const currentDiv = genElement('div', current, '', 'forecasts');
        genElement('span', currentDiv, weatherSymbols[forecast.condition], 'condition symbol');

        const spanCondition = genElement('span', currentDiv, '', 'condition');
        createForecastPart(spanCondition, forecast, name);
    }

    function createUpcomingForecast(upcomingForecasts) {
        if (upcoming.children[1]) { upcoming.children[1].remove(); }
        const upcomingDiv = genElement('div', upcoming, '', 'forecast-info');

        upcomingForecasts.forEach(forecast => {
            const span = genElement('span', upcomingDiv, '', 'upcoming');
            createForecastPart(span, forecast);
        });
    }

    function createForecastPart(parent, forecast, name) {
        name ? genElement('span', parent, name, 'forecast-data')
            : genElement('span', parent, weatherSymbols[forecast.condition], 'symbol');

        genElement('span', parent,
            `${forecast.low}${weatherSymbols.Degrees}/${forecast.high}${weatherSymbols.Degrees}`,
            'forecast-data');
        genElement('span', parent, forecast.condition, 'forecast-data');
    }

    function genElement(tag, parent, content, className) {
        const element = document.createElement(tag);
        if (content) { element.innerHTML = content; }
        if (className) { element.className = className; }
        parent.appendChild(element);
        return element;
    }
}

attachEvents();