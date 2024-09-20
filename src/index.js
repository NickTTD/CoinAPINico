import './index.css'; //Esto hace que funcione tailwind.
document.addEventListener('DOMContentLoaded', () => {
  // Get the root element
  const root = document.getElementById('root');

  // Crear/inyectar el html con tailwind de los datos
  const exchangeInfoHTML = `
      <div class="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg content-center">
          <h1 class="text-2xl font-bold text-gray-800 mb-4 text-center">Exchange Info</h1>
          <div id="exchange-info" class="space-y-4">
              <p class="text-lg font-semibold text-gray-700">Nombre: 
                  <span id="exchange-name" class="text-gray-900 font-bold"></span>
              </p>
              <p class="text-lg font-semibold text-gray-700">Volumen (1hr): 
                  <span id="volume-1hr" class="text-gray-900 font-bold"></span> USD
              </p>
              <p class="text-lg font-semibold text-gray-700">Volumen (1dia): 
                  <span id="volume-1day" class="text-gray-900 font-bold"></span> USD
              </p>
          </div>
      </div>
  `;
  root.innerHTML = exchangeInfoHTML;

  // Constante para la api key
  const apiKey = 'Tu key...';

  // Fetch principal para la api rest de coinApi
  fetch('https://rest.coinapi.io/v1/exchanges', {
      method: 'GET',
      headers: {
          'X-CoinAPI-Key': apiKey
      }
  })
  .then(response => response.json())
  .then(data => {
      // Datos de binance específicamente
      const binanceData = data.find(exchange => exchange.exchange_id === "BINANCE");

      // Actualizar el DOM
      if (binanceData) {
          document.getElementById('exchange-name').textContent = binanceData.name;
          document.getElementById('volume-1hr').textContent = binanceData.volume_1hrs_usd.toFixed(2);
          document.getElementById('volume-1day').textContent = binanceData.volume_1day_usd.toFixed(2);
      }
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
});
