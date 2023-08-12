const eventList = document.getElementById("eventList");
const dateFilter = document.getElementById("dateFilter");

const events = [
    { name: "Les Cowboys Fringants", venue: "Gesù", date: "2023-09-05" },
    { name: "Hot Hot Heat", venue: "Club Soda", date: "2023-09-10" },
    { name: "Daniel Bélanger", venue: "Bell Centre", date: "2023-09-15" },
    { name: "Veronica Maggio", venue: "Théâtre Corona", date: "2023-09-20" },
    { name: "Drake", venue: "MTELUS", date: "2023-09-25" }
    // Add more events as needed
  ];  

function updateEventList() {
    eventList.innerHTML = "";
    const selectedDate = dateFilter.value;
  
    for (const event of events) {
      if (!selectedDate || event.date === selectedDate) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center"; // Add these classes
        li.innerHTML = `
          <div>
            <strong>${event.name}</strong> &bull; ${event.venue}
          </div>
          <div>${event.date}</div>
        `;
        eventList.appendChild(li);
      }
    }
}

dateFilter.addEventListener("change", updateEventList);
updateEventList();

const reloadFilterButton = document.getElementById("reloadFilter");

reloadFilterButton.addEventListener("click", function () {
  dateFilter.value = ""; // Clear the selected date
  updateEventList();
});