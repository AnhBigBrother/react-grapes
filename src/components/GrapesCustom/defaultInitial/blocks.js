import {
	svgHeading,
	svgImage,
	svgInput,
	svgLink,
	svgMap,
	svgSquare,
	svgText,
	svgVideo,
} from "../svg";

export const blocks = [
	{
		id: "h1",
		label: "H1",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
				width: "100%",
				"font-size": "2em",
				margin: ".67em 0",
			},
		},
	},
	{
		id: "h2",
		label: "H2",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
				width: "100%",
				"font-size": "1.5em",
				margin: ".75em 0",
			},
		},
	},
	{
		id: "h3",
		label: "H3",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
				width: "100%",
				"font-size": "1.17em",
				margin: ".83em 0",
			},
		},
	},
	{
		id: "h4",
		label: "H4",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
			},
		},
	},
	{
		id: "h5",
		label: "H5",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
				width: "100%",
				"font-size": ".83em",
				margin: "1.5em 0",
			},
		},
	},
	{
		id: "h6",
		label: "H6",
		category: "Basic",
		media: svgHeading,
		content: {
			type: "text",
			content: "Your heading",
			style: {
				"font-weight": "bolder",
				width: "100%",
				"font-size": "0.75em",
				margin: "1.67em 0",
			},
		},
	},
	{
		id: "text",
		label: "Text",
		category: "Basic",
		media: svgText,
		content: `<div>Insert your text here</div>`,
	},
	{
		id: "image",
		label: "Image",
		category: "Basic",
		media: svgImage,
		select: true,
		content: {
			type: "image",
		},
		activate: true,
	},
	{
		id: "video",
		label: "Video",
		category: "Basic",
		media: svgVideo,
		content: {
			type: "video",
		},
	},
	{
		id: "link",
		label: "Link",
		category: "Basic",
		media: svgLink,
		activate: true,
		content: {
			type: "link",
			content: "Insert your link here",
			style: { padding: "2px" },
		},
	},
	{
		id: "map",
		label: "Map",
		category: "Basic",
		media: svgMap,
		content: {
			type: "map",
		},
	},
	{
		id: "input",
		label: "Input",
		category: "Basic",
		media: svgInput,
		content: {
			type: "customInput",
		},
	},
	{
		id: "box",
		label: "Box",
		category: "Basic",
		media: svgSquare,
		content: {
			type: "div",
			style: {
				width: "100%",
				height: "auto",
				"min-height": "50px",
			},
		},
	},
	{
		id: "form",
		label: "form",
		category: "Form",
		content: {
			type: "form",
		},
	},
];
