/**
 * Scripts for the Educational Redesign Aid website.
 * 
 * @author Ivan de Wolf
 * @project Educational Redesign Aid
 * @version 1.0
 */

/**
 * Dropdown
 * -----------------------------------
 * This is a simple dropdown which opens or closes when clicked.
 */
const dropdown = {
  dropdowns: [],
  init() {
    /* Search the dropdowns on the page. */
    this.dropdowns = document.getElementsByClassName('dropdown')

    /* Add the listener to each dropdown. */
    for (el of Array.from(this.dropdowns))
      el.addEventListener('click', this.onClick)
  },
  onClick() {
    /* Toggle the active class. */
    if (this.classList.contains('dropdown--active'))
      this.classList.remove('dropdown--active')
    else
      this.classList.add('dropdown--active')
  }
}

dropdown.init()


/**
 * Collapse
 * -----------------------------------
 * This collapse component expands a card when the use clicks the plus.
 */
const collapse = {
  collapses: [],
  init() {
    /* Search the collapses on the page. */
    this.collapses = document.getElementsByClassName('card--collapsible')

    /* Add the listener to each dropdown. */
    for (el of Array.from(this.collapses))
      el.querySelector('.card__action').addEventListener('click', this.onClick)
  },
  onClick() {
    /* Toggle the expanded class. */
    if (this.closest('.card--collapsible').classList.contains('card--expanded'))
      this.closest('.card--collapsible').classList.remove('card--expanded')
    else
      this.closest('.card--collapsible').classList.add('card--expanded')
  }
}

collapse.init()


/**
 * SwitchField
 * -----------------------------------
 * This switchField component switches between two items.
 */
const switchField = {
  active: 0,
  switchFields: [],
  init() {
    /* Search the switch fields on the page. */
    this.switchFields = document.getElementsByClassName('switch-field')

    /* Set initial value. */
    const radio = document.querySelector('input[type="radio"]:checked')
    if (radio) {
      this.active = radio.value
  
      this.setActive(radio)
    }

    /* Add the listener to each switch field. */
    for (el of Array.from(this.switchFields))
      el.addEventListener('click', this.onClick.bind(this))
  },
  onClick() {
    const radio = document.querySelector('input[type="radio"]:checked')
    const value = radio.value

    /* Check for change. */
    if (this.active != value) {
      this.active = value
      this.setActive(radio)
    }
  },
  setActive(el) {
    let items = el
    if (items) {
      items = items
        .closest('.switch-field')
        .nextElementSibling
        .querySelectorAll('.switch-field__item')

      for (let item of items)
        item.style.display = 'none'

      items[this.active].style.display = 'block'
    }
  }
}

switchField.init()
