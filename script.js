document.addEventListener("DOMContentLoaded", function () {
  // Get the current date and time
  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString("en-US", { weekday: "long" });
  const utcTime = currentDate.getTime();

  // Update the HTML elements with the real-time data
  document.getElementById("currentDayOfTheWeek").textContent = dayOfWeek;
  document.getElementById("currentUTCTime").textContent = utcTime;
});
