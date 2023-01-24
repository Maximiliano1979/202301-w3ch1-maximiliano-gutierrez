interface CardStructure {
  element: Element;
}

class Card implements CardStructure {
  element: Element;
  characterName: string;
  years: number;
  family: string;
  status: boolean;

  constructor(
    parentElement: Element,
    CharacterName: string,
    years: number,
    family: string
  ) {
    this.element = document.createElement("article");
    this.characterName = CharacterName;
    this.years = years;
    this.family = family;
    parentElement.appendChild(this.element);
    this.render();
  }

  render() {
    this.element.innerHTML = `<div class="card character__card">
          <img src="img/no-one.jpg" alt="Character's Name and family" class="character__picture card-img-top" />
          <div class="card-body">
            <h2 class="character__name card-title h4">${this.characterName} & ${this.family}</h2>
            <div class="character__info">
              <ul class="list-unstyled">
                <li>Age: ${this.years} yrs</li>
                <li>
                  State:
                  <i class="fas fa-thumbs-down"></i>
                  <i class="fas fa-thumbs-up"></i>
                </li>
              </ul>
            </div>
            <div class="character__overlay">
              <ul class="list-unstyled">
                <li>Years of Reign: X</li>
                <li>Weapon: XXX</li>
                <li>Dexterity: X</li>
                <li>Kiss Ass level: X</li>
                <li>Advises to: X</li>
                <li>Serves to: X</li>
              </ul>
              <div class="character__actions">
                <button class="character__action btn">speak</button>
                <button class="character__action btn">die</button>
              </div>
            </div>
          </div>
          <i class="emoji"></i>
        </div>
      </li>
    </ul>
  </div>`;
  }
}

export default Card;
