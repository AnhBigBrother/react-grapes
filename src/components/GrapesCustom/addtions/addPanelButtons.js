import {
	svgBlocks,
	svgClear,
	svgDesktop,
	svgExpand,
	svgExport,
	svgEyeSlash,
	svgJson,
	svgLayers,
	svgMobile,
	svgSave,
	svgSquare,
	svgStyles,
	svgTrails,
} from "../svg";

export const addPanelButtons = (editor, id) => {
	editor.Panels.addPanel({
		id: "panel__basicActions",
		el: `#${id}-panel__basicActions`,
		buttons: [
			{
				id: "visibility",
				active: true, // active by default
				label: '<i class="fa fa-clone"></i>',
				command: "sw-visibility", // Built-in command
			},
			{
				id: "export",
				label: "<i class='fa fa-download'></i>",
				command: "export-template",
				context: "export-template", // For grouping context of buttons from the same panel
			},
			{
				id: "show-json",
				label: svgJson,
				command: "show-json",
				context: "show-json",
			},
		],
	});
	editor.Panels.addPanel({
		id: "panel__switcher",
		el: `#${id}-panel__switcher`,
		buttons: [
			{
				id: "show-blocks",
				active: true,
				label: svgBlocks,
				command: "show-blocks",
				togglable: false,
			},
			{
				id: "show-layers",
				active: true,
				label: svgLayers,
				command: "show-layers",
				// Once activated disable the possibility to turn it off
				togglable: false,
			},
			{
				id: "show-style",
				active: true,
				label: svgStyles,
				command: "show-styles",
				togglable: false,
			},
			{
				id: "show-traits",
				active: true,
				label: svgTrails,
				command: "show-traits",
				togglable: false,
			},
		],
	});
	editor.Panels.addPanel({
		id: "panel__devices",
		el: `#${id}-panel__devices`,
		buttons: [
			{
				id: "device-desktop",
				label: '<i class="fa fa-television"></i>',
				command: "set-device-desktop",
				active: true,
				togglable: false,
			},
			{
				id: "device-mobile",
				label: '<i class="fa fa-mobile"></i>',
				command: "set-device-mobile",
				togglable: false,
			},
		],
	});
	editor.Panels.addPanel({
		id: "panel__saveAndClear",
		el: `#${id}-panel__saveAndClear`,
		buttons: [
			{
				id: "save-localStorage",
				label: svgSave,
				command: "save-localStorage",
			},
			{
				id: "clear-localStorage",
				className: "fa fa-trash",
				command: "clear-localStorage",
			},
			{
				id: "clear-canvas",
				className: "fa fa-eraser",
				command: "clear-canvas",
			},
			{
				id: "expand",
				label: svgExpand,
				command: "core:fullscreen",
			},
			{
				id: "preview",
				className: "fa fa-eye",
				command: "enterPreview",
			},
			{
				id: "undo",
				className: "fa fa-undo",
				command: "core:undo",
			},
			{
				id: "redo",
				className: "fa fa-repeat",
				command: "core:redo",
			},
		],
	});
	editor.Panels.addPanel({
		id: "",
		el: `#${id}-panel__exitPreview`,
		buttons: [
			{
				id: "exit__preview",
				label: svgEyeSlash,
				command: "existPreview",
			},
		],
	});
};
