// Custom commands

export const addCommands = (editor, id) => {
	editor.Commands.add("show-json", (editor) => {
		editor.Modal.setTitle("Components JSON")
			.setContent(
				`<textarea style="width:100%; height: 250px;">
          ${JSON.stringify(editor.getComponents())}
        </textarea>`
			)
			.open();
	});

	// commands to set devices
	editor.Commands.add("set-device-desktop", {
		run: (editor) => editor.setDevice("Desktop"),
	});
	editor.Commands.add("set-device-mobile", {
		run: (editor) => editor.setDevice("Mobile"),
	});

	// commands for switch-buttons
	editor.Commands.add("show-blocks", {
		getBlocksEl(editor) {
			const row = editor.getContainer().closest(`#${id}-editor-row`);
			return row.querySelector(`#${id}-blocks-container`);
		},
		run(editor, sender) {
			this.getBlocksEl(editor).style.display = "";
		},
		stop(editor, sender) {
			this.getBlocksEl(editor).style.display = "none";
		},
	});
	editor.Commands.add("show-layers", {
		getRowEl(editor) {
			return editor.getContainer().closest(`#${id}-editor-row`);
		},
		getLayersEl(row) {
			return row.querySelector(`#${id}-layers-container`);
		},

		run(editor, sender) {
			const lmEl = this.getLayersEl(this.getRowEl(editor));
			lmEl.style.display = "";
		},
		stop(editor, sender) {
			const lmEl = this.getLayersEl(this.getRowEl(editor));
			lmEl.style.display = "none";
		},
	});
	editor.Commands.add("show-styles", {
		getRowEl(editor) {
			return editor.getContainer().closest(`#${id}-editor-row`);
		},
		getStyleEl(row) {
			return row.querySelector(`#${id}-styles-container`);
		},

		run(editor, sender) {
			const smEl = this.getStyleEl(this.getRowEl(editor));
			smEl.style.display = "";
		},
		stop(editor, sender) {
			const smEl = this.getStyleEl(this.getRowEl(editor));
			smEl.style.display = "none";
		},
	});
	editor.Commands.add("show-traits", {
		getTraitsEl(editor) {
			const row = editor.getContainer().closest(`#${id}-editor-row`);
			return row.querySelector(`#${id}-traits-container`);
		},
		run(editor, sender) {
			this.getTraitsEl(editor).style.display = "";
		},
		stop(editor, sender) {
			this.getTraitsEl(editor).style.display = "none";
		},
	});

	// commands to save/clear localStorage
	editor.Commands.add("save-localStorage", {
		run(ed) {
			if (editor) {
				const component = JSON.stringify(editor.getComponents());
				const style = JSON.stringify(editor.getStyle());
				console.log(component);
				console.log(style);
				localStorage.setItem(`grapes_component-${id}`, component);
				localStorage.setItem(`grapes_style-${id}`, style);
				alert("Saved to localStorage");
			}
		},
	});
	editor.Commands.add("clear-localStorage", {
		run(ed) {
			if (localStorage.getItem(`grapes_component-${id}`)) {
				if (confirm("Clear all data in localStorage?")) {
					localStorage.removeItem(`grapes_component-${id}`);
					localStorage.removeItem(`grapes_style-${id}`);
				}
			}
		},
	});

	editor.Commands.add("clear-canvas", {
		run(ed) {
			if (confirm("Clear canvas?")) {
				ed.Components.clear();
				ed.Css.clear();
			}
		},
	});

	//Undo
	editor.Commands.add("undo", {
		run: (editor) => editor.UndoManager.undo(),
	});

	// Redo
	editor.Commands.add("redo", {
		run: (editor) => editor.UndoManager.redo(),
	});

	// preview
	editor.Commands.add("enterPreview", {
		run(ed) {
			ed.runCommand("core:preview");
			const exit = document.getElementById(`${id}-panel__exitPreview`);
			exit.style.display = "block";
		},
	});
	editor.Commands.add("existPreview", {
		run(ed) {
			ed.stopCommand("core:preview");
			const exit = document.getElementById(`${id}-panel__exitPreview`);
			exit.style.display = "none";
		},
	});
};
