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
		const textArea = container.querySelector(
			`.terminal-text`
		);
		if (!textArea) {
			return;
		}

		setTimeout(() => {
			textArea.style["animation-play-state"] = "running";
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
