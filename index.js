(() => {
	/**
	 * @return {HTMLElement[]}
	 */
	function getTerminalTextContainers() {
		return Array.from(document.querySelectorAll(".terminal-text"));
	}

	/**
	 * @param {HTMLElement} container
	 * @param {number} delay
	 * @return {void}
	 */
	function animateTerminalContainer(container, delay) {
		setTimeout(() => {
			container.style["animation-play-state"] = "running";
		}, delay);
	}

	function startTerminal() {
		const delayBetweenContainersMs = 400;
		const containers = getTerminalTextContainers();
		let delay = 0;
		containers.forEach((container) => {
			animateTerminalContainer(container, delay);
			delay += delayBetweenContainersMs;
		});
	}

	document.addEventListener("DOMContentLoaded", startTerminal);
})();
