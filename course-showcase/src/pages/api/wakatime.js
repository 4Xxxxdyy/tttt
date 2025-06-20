export default async function handler(req, res) {
    // 从环境变量获取API Key
    const apiKey = process.env.WAKATIME_API_KEY;
    
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'WakaTime API key is not configured' 
      });
    }
    
    try {
      // 获取最近7天的编码数据
      const response = await fetch('https://wakatime.com/api/v1/users/current/stats/last_7_days', {
        headers: {
          'Authorization': `Basic ${Buffer.from(apiKey).toString('base64')}`
        }
      });
      
      if (!response.ok) {
        throw new Error(`WakaTime API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 提取并格式化需要的数据
      const totalSeconds = data.data?.total_seconds || 0;
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      
      res.status(200).json({
        text: `${hours}小时${minutes}分钟`,
        seconds: totalSeconds,
        languages: data.data?.languages || []
      });
      
    } catch (error) {
      console.error('WakaTime API error:', error);
      res.status(500).json({ 
        error: 'Failed to fetch coding time data' 
      });
    }
  }