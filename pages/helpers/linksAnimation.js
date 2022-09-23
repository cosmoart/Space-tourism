export default function handleLinks(e, linksInfo) {
	linksInfo.forEach(nav => {
		document.querySelectorAll(nav.className).forEach((card) => {
			if (String(card.classList).includes(e.target.value)) {
				card.classList.remove(nav.hidden);
			} else {
				card.classList.add(nav.hidden);
			}
		});
	})
}