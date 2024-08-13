import "./index.css";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";

import {
	cards
} from "../utils/constants.js"

function createCard(data) {
	const card = new Card(data, '#card');
	const cardElement = card.createCard();
	return cardElement
}

const initialCardsList = new Section({
	renderer: (item) => {
		const newCard = createCard(item);
		initialCardsList.addItemByAppend(newCard)
	}}, '.cards')

initialCardsList.renderItems(cards);