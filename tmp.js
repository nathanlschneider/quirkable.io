const parentElement = document.querySelector(".tribe-events-calendar-list");
const childElements = Array.from(parentElement.children);
let counter = 0;

childElements.forEach((child, i) => {
	if (child.tagName === "H2") {
		counter++;
		child.setAttribute("data-id", counter);
	}

	if (child.tagName !== "H2") {
		child.setAttribute("data-id", counter);
	}
});

(function () {
	let newChildren = Array.from(parentElement.children);

	newChildren.forEach((child) => {
		if (child.tagName === "H2") {
			child.addEventListener("click", (e) => {
				let dataId = e.target.getAttribute("data-id");
				newChildren.forEach((child) => {
					if (child.getAttribute("data-id") === `${dataId}`) {
                        child.classList.toggle('hideChild');
					}
				});
			});
		}
	});
})();
