import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Modal } from "react-bootstrap"
import Select from "react-select"
import "./App.css"

function App() {
	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
		{ value: "1chocolate", label: "Chocolate" },
		{ value: "1strawberry", label: "Strawberry" },
		{ value: "1vanilla", label: "Vanilla" },
		{ value: "2chocolate", label: "Chocolate" },
		{ value: "2strawberry", label: "Strawberry" },
		{ value: "2vanilla", label: "Vanilla" },
		{ value: "3chocolate", label: "Chocolate" },
		{ value: "3strawberry", label: "Strawberry" },
		{ value: "3vanilla", label: "Vanilla" },
		{ value: "4chocolate", label: "Chocolate" },
		{ value: "4strawberry", label: "Strawberry" },
		{ value: "4vanilla", label: "Vanilla" },
		{ value: "5chocolate", label: "Chocolate" },
		{ value: "5strawberry", label: "Strawberry" },
		{ value: "5vanilla", label: "Vanilla" },
		{ value: "6chocolate", label: "Chocolate" },
		{ value: "6strawberry", label: "Strawberry" },
		{ value: "6vanilla", label: "Vanilla" },
		{ value: "7chocolate", label: "Chocolate" },
		{ value: "7strawberry", label: "Strawberry" },
		{ value: "7vanilla", label: "Vanilla" },
		{ value: "8chocolate", label: "Chocolate" },
		{ value: "8strawberry", label: "Strawberry" },
		{ value: "8vanilla", label: "Vanilla" },
	]

	const items = []
	for (let index = 0; index < 20; ++index) {
		items.push(
			<div
				key={index}
				style={{
					backgroundColor: "white",
					padding: 10,
					flex: 1,
					display: "flex",
					flexWrap: "nowrap",
					flexDirection: "row",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flex: 0.2,
					}}
				>
					CHOOSE:
				</div>
				<div
					style={{
						display: "flex",
						flex: 0.8,
					}}
				>
					<Select
						menuPosition="fixed"
						options={options}
						theme={(theme) => ({ ...theme })}
						styles={{
							container: (styles) => ({
								...styles,
								display: "flex",
								flex: 1,
							}),
							control: (styles) => ({
								...styles,
								display: "flex",
								flex: 1,
							}),
							input: (styles) => {
								const after = styles["&:after"] as any
								delete after["content"]
								styles["&:after"] = after
								return {
									...styles,
									display: "flex",
								}
							},
						}}
					/>
				</div>
			</div>
		)
	}
	return (
		<div>
			Hello
			<Modal show scrollable>
				<Modal.Header>BLAH</Modal.Header>
				<Modal.Body>{items}</Modal.Body>
				<Modal.Header>
					<Button>OK</Button>
				</Modal.Header>
			</Modal>
		</div>
	)
}

export default App
