(() => {
	/**
	 * @return {HTMLElement[]}
	 */
	function getTerminalTextContainers() {
		return Array.from(document.querySelectorAll(".terminal-text, .terminal-text-list li"));
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

	/**
	 * @return {void}
	 */
	function focusMenuInput() {
		const input = document.querySelector('#menu-input');
		if (!input) {
			return;
		}
		input.focus();
	}

	function startTerminal() {
		const delayBetweenContainersMs = 400;
		const containers = getTerminalTextContainers();
		let delay = 0;
		containers.forEach((container) => {
			animateTerminalContainer(container, delay);
			delay += delayBetweenContainersMs;
		});
		setTimeout(focusMenuInput, delay);
	}

	document.addEventListener("DOMContentLoaded", startTerminal);
})();
