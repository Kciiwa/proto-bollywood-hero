export const sendBirthData = async ({ name, date, time, lat, lon }) => {
  try {
    console.log("📡 Отправка данных:", { name, date, time, lat, lon });

    const res = await fetch('https://astro-api-304037127660.asia-south1.run.app/generate-chart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, date, time, lat, lon }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Server responded with ${res.status}: ${errorText}`);
    }

    const chart = await res.json();
    console.log("🌠 Натальная карта:", chart);
    return chart;
  } catch (error) {
    console.error('🚨 Astro API error:', error.message);
    return null;
  }
};