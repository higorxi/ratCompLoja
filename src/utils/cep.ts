export async function calcularFrete(cepDestino: string) {
    const cepOrigem = '75083-125'; 
    
    const url = `https://api.linkapi.com.br/v1/correios/frete?cepOrigem=${cepOrigem}&cepDestino=${cepDestino}&peso=1&comprimento=10&largura=10&altura=10&diametro=0&tipo=caixa`;
  
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MzUzMjg2OTAsImlzcyI6InRva2VuLXNlcnZpY2UiLCJleHAiOjE3MzU0MTUwOTAsImp0aSI6IjliOTM5NWRlLTQzYjktNDI3Ny05MzVkLTVkZDQzZTEyOWIwOCIsImFtYmllbnRlIjoiUFJPRFVDQU8iLCJwZmwiOiJQRiIsImlwIjoiMTcwLjI1NC43NC4yNSwgMTkyLjE2OC4xLjEzMCIsImNwZiI6IjA2NTEyNzQzMTEzIiwiaWQiOiIwNjUxMjc0MzExMyJ9.wRHnJCDDXg50xrISjIjtO0wiTuasZGfpXd5cxgqyViGvXibjQlntCFEzoUVzzH3ibUo78tlCovQUMF5gEiKuk8a0-aOeeaDXjJc5dndYSkxHGGPKS86oY7nO2x11_nT34WN0veFNtPHECG_2LMCBMfS7jICOhycwq88ZltSTGKqGYl1zI4jsKAspzKXFeVeEtRG0fSsmSJ7ObKyq_wGROVRkCoP_E7nohN4HMQi6fA7y2EWaqnIj8YSaFHLJ8MSa4EcxGA2GUw8J1U8ePNDhp_e_uUQbV5FPPRmnk5QPlCtpQ7524QVygtoa754cBUY9UnBFe3OGRj5h2BSwcNiy_A', 
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log('Valor do frete: ', data);
    } else {
      console.error('Erro ao calcular o frete');
    }
  }
  