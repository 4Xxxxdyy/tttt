import fetch from 'node-fetch';

const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
const WAKATIME_API_URL = 'https://wakatime.com/api/v1/users/current/stats/last_7_days';

export default async function handler(req, res) {
  try {
    if (!WAKATIME_API_KEY) {
      throw new Error('WakaTime API key is not configured');
    }

    const response = await fetch(WAKATIME_API_URL, {
      headers: {
        'Authorization': `Basic ${Buffer.from(WAKATIME_API_KEY + ':').toString('base64')}`
      }
    });

    if (!response.ok) {
      throw new Error(`WakaTime API responded with ${response.status}`);
    }

    const data = await response.json();
    const simplifiedData = {
      human_readable_total: data.data.human_readable_total_including_other_language,
      languages: data.data.languages,
      days_including_holidays: data.data.days_including_holidays
    };

    res.status(200).json(simplifiedData);
  } catch (error) {
    console.error('Error fetching WakaTime data:', error);
    res.status(500).json({ error: 'Failed to fetch WakaTime data' });
  }
}