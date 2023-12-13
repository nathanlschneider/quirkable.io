window.addEventListener('DOMContentLoaded', () => {

	const accordian = document.querySelector("#accordion");
	const firstH3 = document.querySelector("#accordion > h3:first-of-type");
	const h3Span = document.querySelector("#accordion > h3:first-of-type > span");
	
	
	firstH3.classList.remove("ui-accordion-header-active","ui-state-active");
	firstH3.classList.add("ui-accordion-header-collapsed","ui-corner-all");
	firstH3.setAttribute("aria-selected", "false");
	firstH3.setAttribute("aria-expanded", "false");
	firstH3.setAttribute("tabindex", "-1");
	
	h3Span.classList.remove("ui-icon-triangle-1-s");
	h3Span.classList.add("ui-icon-triangle-1-e");
  
	function handleClick() {
	  firstH3.classList.add("ui-accordion-header-active","ui-state-active");
	  firstH3.classList.remove("ui-accordion-header-collapsed","ui-corner-all");
	  firstH3.setAttribute("aria-selected", "true");
	  firstH3.setAttribute("aria-expanded", "true");
	  firstH3.setAttribute("tabindex", "0");
	  
	  h3Span.classList.add("ui-icon-triangle-1-s");
	  h3Span.classList.remove("ui-icon-triangle-1-e");
  
	  firstH3.nextElementSibling.style.display = "block";
	}
  
	firstH3.addEventListener("click", handleClick);
  
  
	const doContainers = () => {
	  let containers = document.querySelectorAll("[class^=koowa_media_contents]");
	  containers.forEach((container) => {
		container.style = "display: none;";
		if (container.innerText.trim().length === 0) {
		  container.previousElementSibling.remove();
		}
	  });
	};
  
	const showAccordians = () => {
	  accordian.style.opacity = "1";
	};
  
	doContainers();
	showAccordians();
  };
