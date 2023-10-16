/**
 * Set your attributes like this:
 *  d3.selection.call(setAttributes, config)
 * @param {d3.selection} selection - The d3 selection
 * @param {object} configs - The configs with this structure: { "font-family": "Roboto", ... }
 */
function setAttributes(selection, configs) {
  if(typeof configs != "object")
    throw new Error("[setAttributes]: config should be an Object")

  // Set attributes on selection
  var attributes = Object.keys(configs)
  attributes.forEach(
    (attribute) => {
      selection.attr(attribute, configs[attribute])
    }
  )
}
export { setAttributes }
