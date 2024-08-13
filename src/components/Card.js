export class Card {
	constructor(data, templateSelector) {
		this._cardId = data._id;
		this._link = data.src;
		this._title = data.title;
		this._template = templateSelector;
    this._salePrice = data.salePrice;
    this._price = data.price
	}

	_getTemplate() {
		const elementCard = document.querySelector(this._template).content.querySelector('.card').cloneNode(true);
		return elementCard
	}

	createCard() {
		this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.card__image');
    this._cardTitle = this._cardElement.querySelector('.card__title');
    this._cardSale = this._cardElement.querySelector('.card__sale');
    this._cardSalePrice = this._cardElement.querySelector('.card__sale-price').querySelector('.card__price-value');
    this._cardOldPrice = this._cardElement.querySelector('.card__old-price').querySelector('.card__price-value');
    this._cardPrice = this._cardElement.querySelector('.card__price');
    this._cardPriceValue = this._cardElement.querySelector('.card__price').querySelector('.card__price-value');
    this._cardChangedPrices = this._cardElement.querySelector('.card__changed-prices');

    this._cardTitle.textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    if (this._salePrice === "") {
      this._cardChangedPrices.style.display = 'none';
      this._cardSale.style.display = 'none';
      this._cardPriceValue.textContent = this._price
    } else {
      this._cardPrice.style.display = 'none';
      this._cardSalePrice.textContent = this._salePrice;
      this._cardOldPrice.textContent = this._price;
    }

    return this._cardElement;
	}
}