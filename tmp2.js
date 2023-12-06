const eventRows = Array.from(document.querySelectorAll(".tribe-events-calendar-list__event-row"));

// Create an object to store events grouped by date
const groupedEvents = {};

// Iterate through each event row
eventRows.forEach((eventRow) => {
	// Get the date tag for the current row
	const dateTag = eventRow.querySelector(".tribe-events-calendar-list__event-date-tag-datetime");

	// Get the date string from the date tag
	const date = dateTag ? dateTag.getAttribute("datetime") : null;

	if (date) {
		// Check if the date is already in the groupedEvents object
		if (!groupedEvents[date]) {
			groupedEvents[date] = [];
		}

		// Move each event from the current row to the groupedEvents object
		const events = Array.from(eventRow.querySelectorAll(".tribe-events-calendar-list__event"));
		events.forEach((event) => {
			const clonedEvent = event.cloneNode(true);
			clonedEvent.classList.add("event");
			groupedEvents[date].push(clonedEvent);
		});
	}
});

// Create accordion containers for each date group
for (const date in groupedEvents) {
	const accordionContainer = document.createElement("div");
	accordionContainer.classList.add("day");

	// Create a date tag for the accordion header
	const dateTag = document.createElement("time");
	dateTag.classList.add("tribe-events-calendar-list__event-date-tag-datetime");
	dateTag.setAttribute("datetime", date);
	const formattedDate = new Date(date);
	dateTag.innerText = formattedDate.toLocaleDateString("en-US", {
		weekday: "short",
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	// Add the date tag to the accordion container
	accordionContainer.appendChild(dateTag);

	// Create a container for the events
	const eventsContainer = document.createElement("div");
	eventsContainer.classList.add("events");
	eventsContainer.style.display = "none"; // Set the initial display to 'none'

	// Add each event from the groupedEvents object to the events container
	groupedEvents[date].forEach((event) => {
		eventsContainer.appendChild(event);
	});

	// Add the events container to the accordion container
	accordionContainer.appendChild(eventsContainer);

	// Add a click event listener to toggle the display of events
	accordionContainer.addEventListener("click", function () {
		eventsContainer.style.display = eventsContainer.style.display === "none" ? "block" : "none";
	});

	// Insert the accordion container before the first event row
	eventRows[0].parentNode.insertBefore(accordionContainer, eventRows[0]);
}

let leftOvers = document.querySelectorAll(".tribe-common-g-row.tribe-events-calendar-list__event-row");
leftOvers.forEach((left) => left.remove());
