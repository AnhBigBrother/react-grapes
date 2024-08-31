export const defaults = (id) => [
	{
		id: "panel__top",
		el: `#${id}-panel__top`,
	},
	{
		id: "panel__right",
		el: `#${id}-panel__right`,
		resizable: {
			maxDim: 400,
			minDim: 200,
			tc: 0, // Top handler
			cl: 1, // Left handler
			cr: 0, // Right handler
			bc: 0, // Bottom handler
			keyWidth: "flex-basis",
		},
	},
];
