export const sectors = [
	{
		name: "Genernal",
		open: false,
		buildProps: ["display", "postion", "flex-direction", "justify-content", "align-items"],
	},
	{
		name: "Dimension",
		open: false,
		// Use built-in properties
		buildProps: ["width", "height", "max-width", "min-height", "margin", "padding"],
		// Use `properties` to define/override single property
		// properties: [
		// 	{
		// 		// Type of the input,
		// 		// options: integer | radio | select | color | slider | file | composite | stack
		// 		type: "integer",
		// 		name: "The width", // Label for the property
		// 		property: "width", // CSS property (if buildProps contains it will be extended)
		// 		units: ["px", "%"], // Units, available only for 'integer' types
		// 		defaults: "auto", // Default value
		// 		min: 0, // Min value, available only for 'integer' types
		// 	},
		// ],
	},
	{
		name: "Decorations",
		open: false,
		buildProps: [
			"background-color",
			"box-shadow",
			"border",
			"border-radius",
			"opacity",
			"background-image",
			"custom-prop",
			"background-repeat",
			"background-size",
		],
		properties: [
			{
				id: "custom-prop",
				name: "Size",
				property: "font-size",
				type: "select",
				defaults: "32px",
				// List of options, available only for 'select' and 'radio'  types
				options: [
					{ value: "16px", name: "Tiny" },
					{ value: "24px", name: "Medium" },
					{ value: "36px", name: "Big" },
				],
			},
		],
	},
	{
		name: "Typography",
		open: false,
		buildProps: [
			"font-family",
			"font-size",
			"font-weight",
			"letter-spacing",
			"color",
			"text-align",
			"line-height",
			"text-decoration",
			"text-transform",
			"white-space",
		],
		properties: [
			{
				id: "text-decoration",
				name: "text-decoration",
				property: "text-decoration",
				type: "select",
				options: [
					{ value: "overline", name: "overline" },
					{ value: "underline", name: "underline" },
					{ value: "line-through", name: "line-through" },
					{ value: "underline overline", name: "underline overline" },
				],
			},
			{
				id: "text-transform",
				name: "text-transform",
				property: "text-transform",
				type: "select",
				default: "none",
				options: [
					{ value: "none", name: "none" },
					{ value: "capitalize", name: "capitalize" },
					{ value: "uppercase", name: "uppercase" },
					{ value: "lowercase", name: "lowercase" },
				],
			},
			{
				id: "white-space",
				name: "White-space",
				property: "white-space",
				type: "select",
				default: "normal",
				options: [
					{ value: "normal", name: "normal" },
					{ value: "nowrap", name: "nowrap" },
					{ value: "pre", name: "pre" },
					{ value: "pre-line", name: "pre-line" },
					{ value: "pre-wrap", name: "pre-wrap" },
				],
			},
		],
	},
];
