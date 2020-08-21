/**
 * Custom Color Change Event
 */

/**
 * @memberof colorPickerComp
 * @method colorChange
 * @description Function to change the color of an instance via a JavaScript function
 * @param {string} color - The color you are changing the instance to
 * @param {HTMLElement} elem - The button HTMLElement that is a part of the instance
 *
 * @example
 * const button = document.getElementById('my_button');
 * colorPickerComp.colorChange('#ff0000', button);
 */
colorPickerComp.colorChange = function (color, elem) {
	// Defining the RGBA value conversion
	const rgbaValue = colorPickerComp.HSLAToRGBA(color.h, color.s, color.l, color.a);
	const hex = colorPickerComp.HSLAToRGBA(color.h, color.s, color.l, color.a, true);

	// Creating the event
	const event = new CustomEvent('colorChange', {
		// Adding the response details
		detail: {
			color: {
				hsl: `hsla(${color.h}, ${color.s}%, ${color.l}%)`,
				rgb: `rgba(${rgbaValue.r}, ${rgbaValue.g}, ${rgbaValue.b})`,
				hex: hex,
				hsla: `hsla(${color.h}, ${color.s}%, ${color.l}%, ${color.a})`,
				rgba: `rgba(${rgbaValue.r}, ${rgbaValue.g}, ${rgbaValue.b}, ${rgbaValue.a})`,
				hexa: hex
			}
		}
	});

	// Defining element
	const element = elem === undefined ? colorPickerComp.instance.element : elem;

	// Defining color

	// Changing color attributes
	element.setAttribute('data-color', hex);
	element.style.background = hex;

	// Dispatching the event for the active object
	element.dispatchEvent(event);
};
