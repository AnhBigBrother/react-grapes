// Custom components (used in block definition)

export const addComponents = (editor, id) => {
	editor.DomComponents.addType("customInput", {
		isComponent: (el) => {
			return el.tagName === "INPUT";
		},
		model: {
			defaults: {
				tagName: "input",
				draggable: true,
				droppable: false,
				attributes: {
					type: "text",
					placeholder: "Insert text here",
				},
				traits: [
					"id",
					"title",
					"name",
					"placeholder",
					"type",
					{ type: "checkbox", name: "required" },
				],
			},
		},
	});
};
