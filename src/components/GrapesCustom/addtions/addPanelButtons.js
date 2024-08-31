import {
	svgBlocks,
	svgClear,
	svgDesktop,
	svgExport,
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
				className: "btn-toggle-borders",
				label: svgSquare,
				command: "sw-visibility", // Built-in command
			},
			{
				id: "export",
				className: "btn-open-export",
				label: svgExport,
				command: "export-template",
				context: "export-template", // For grouping context of buttons from the same panel
			},
			{
				id: "show-json",
				className: "btn-show-json",
				label: svgJson,
				context: "show-json",
				command: "show-json",
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
				label: svgDesktop,
				command: "set-device-desktop",
				active: true,
				togglable: false,
			},
			{
				id: "device-mobile",
				label: svgMobile,
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
				id: "save_btn",
				label: "Save",
				command: "save-to-localStorage",
				togglable: false,
			},
			{
				id: "clear",
				label: "Clear storage",
				command: "clear-saved",
				togglable: false,
			},
		],
	});
};
