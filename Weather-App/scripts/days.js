function getCurrentDate() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    
    return `${dayOfWeek} ${date} ${month}`;
  }
  
  function getNext6Days() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currentDate = new Date();
    const next6Days = [];
  
    for (let i = 1; i <= 6; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      
      const dayOfWeek = daysOfWeek[nextDate.getDay()];
      const date = nextDate.getDate();
  
      next6Days.push(`${dayOfWeek} ${date}`);
    }
  
    return next6Days;
  }
  
  function updateDailyForecastDates() {
    const dailyForecastDates = document.querySelectorAll('.daily-forecast-date');
    const dates = [getCurrentDate(), ...getNext6Days()];
  
    dailyForecastDates.forEach((element, index) => {
      element.textContent = dates[index];
    });
  }
  
  updateDailyForecastDates();