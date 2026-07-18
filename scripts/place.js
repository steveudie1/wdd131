document.addEventListener("DOMContentLoaded", () => {
    const currentYearElement = document.getElementById("currentYear");
    const lastModifiedElement = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearElement.textContent = currentYear;
    lastModifiedElement.textContent = `Last Modified: ${lastModified}`;

    const temperature = 30; // Example static temperature in Celsius
    const windSpeed = 15; // Example static wind speed in km/h

    const windChillElement = document.getElementById("wind-chill");
    windChillElement.textContent = calculateWindChill(temperature, windSpeed);

    function calculateWindChill(temp, wind) {
        if (temp <= 10 && wind > 4.8) {
            return (
                (
                    13.12 +
                    0.6215 * temp -
                    11.37 * Math.pow(wind, 0.16) +
                    0.3965 * temp * Math.pow(wind, 0.16)
                ).toFixed(2) + " °C"
            );
        } else {
            return "N/A";
        }
    }
});