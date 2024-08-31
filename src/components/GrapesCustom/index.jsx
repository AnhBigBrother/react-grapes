import React, { useEffect, useRef } from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "./grapes.css";
import { blocks } from "./defaultInitial/blocks";
import { devices } from "./defaultInitial/devices";
import { sectors } from "./defaultInitial/styles";
import { addPanelButtons } from "./addtions/addPanelButtons";
import { addCommands } from "./addtions/addCommands";
import { addComponents } from "./addtions/addComponents";
import { defaults } from "./defaultInitial/panels";

const GrapesCustom = ({ grapesId = "default" }) => {
	const editorRef = useRef(null);

	useEffect(() => {
		if (!editorRef.current) {
			const editor = grapesjs.init({
				container: `#${grapesId}-gjs`,
				fromElement: true,
				height: "100%",
				width: "auto",
				storageManager: {
					autosave: false,
				},
				panels: {
					defaults: defaults(grapesId),
				},
				blockManager: {
					appendTo: `#${grapesId}-blocks-container`,
					blocks,
					custom: true,
				},
				layerManager: {
					appendTo: `#${grapesId}-layers-container`,
				},
				styleManager: {
					appendTo: `#${grapesId}-styles-container`,
					sectors,
				},
				deviceManager: {
					devices,
				},
				selectorManager: {
					appendTo: `#${grapesId}-styles-container`,
				},
				traitManager: {
					appendTo: `#${grapesId}-traits-container`,
				},
			});

			addComponents(editor, grapesId);
			addPanelButtons(editor, grapesId);
			addCommands(editor, grapesId);

			const component = JSON.parse(localStorage.getItem(`grapes_component-${grapesId}`));
			const style = JSON.parse(localStorage.getItem(`grapes_style-${grapesId}`));
			if (component) {
				editor.setComponents(component);
				if (style) editor.setStyle(style);
			}

			editorRef.current = editor;
		}

		return () => {};
	}, []);

	return (
		<div className='grapes'>
			<div
				className='panel__top'
				id={`${grapesId}-panel__top`}>
				<div
					className='panel__basicActions'
					id={`${grapesId}-panel__basicActions`}></div>
				<div
					className='panel__devices'
					id={`${grapesId}-panel__devices`}></div>
				<div
					className='panel__saveAndClear'
					id={`${grapesId}-panel__saveAndClear`}></div>
				<div
					className='panel__switcher'
					id={`${grapesId}-panel__switcher`}></div>
			</div>

			<div
				className='editor-row'
				id={`${grapesId}-editor-row`}>
				<div className='editor-canvas'>
					<div
						id={`${grapesId}-gjs`}
						className='gjs'
						style={{ border: "3px solid #444", height: "100%", width: "100%" }}></div>
				</div>
				<div
					className='panel__right'
					id={`${grapesId}-panel__right`}>
					<div
						className='container'
						id={`${grapesId}-blocks-container`}></div>
					<div
						className='container'
						id={`${grapesId}-layers-container`}></div>
					<div
						className='container'
						id={`${grapesId}-styles-container`}></div>
					<div
						className='container'
						id={`${grapesId}-traits-container`}></div>
				</div>
			</div>
		</div>
	);
};

export default GrapesCustom;
