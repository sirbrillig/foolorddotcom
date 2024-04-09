(() => {
	/**
	 * @return {HTMLElement[]}
	 */
	function getTerminalTextContainers() {
		return Array.from(document.querySelectorAll(".terminal-text-container"));
	}

	/**
	 * @param {HTMLElement} container
	 * @param {number} delay
	 * @return {void}
	 */
	function animateTerminalContainer(container, delay) {
		const overlay = container.querySelector(".terminal-text-overlay");
		if (!overlay) {
			console.error("No overlay found");
			return;
		}
		const overlaySvg = container.querySelector(".terminal-text-overlay svg");
		if (!overlaySvg) {
			console.error("No overlay svg found");
			return;
		}
		const textArea = container.querySelector(".terminal-text");
		if (!textArea) {
			console.error("No text area found");
			return;
		}
		overlaySvg.setAttribute("width", textArea.getBoundingClientRect().width);
		setTimeout(() => {
			overlay.style["animation-play-state"] = "running";
		}, delay);
	}

	function startTerminal() {
		const delayBetweenLinesMs = 200;
		const containers = getTerminalTextContainers();
		let delay = 0;
		containers.forEach((container) => {
			animateTerminalContainer(container, delay);
			delay += delayBetweenLinesMs;
		});
	}

	document.addEventListener("DOMContentLoaded", startTerminal);
})();
