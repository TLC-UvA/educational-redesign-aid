/**
 * Scripts for the Keep on Teaching website.
 * 
 * @author Ivan de Wolf
 * @project Keep on Teaching
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
    for (el of this.dropdowns)
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
    for (el of this.collapses)
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
