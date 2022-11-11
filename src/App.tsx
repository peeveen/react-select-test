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
	for (let index = 0; index < 40; ++index) {
		items.push(
			// Flex div so I can make each row full width of the screen
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					flexWrap: "nowrap",
					flex: 1,
					padding: 10,
					maxWidth: "100%", // This has no effect, control still grows.
				}}
			>
				<div>{"Choose:"}&nbsp;</div>
				<Select
					menuPosition="fixed"
					options={options}
					// This is the workaround for the theme-related jittery menu UI
					//theme={(theme) => theme }
					theme={(theme) => ({ ...theme })}
					styles={{
						// Make the container full remaining width
						container: (styles) => ({
							...styles,
							width: "100%",
						}),
						input: (styles) => {
							// This is the expanding-control workaround
							//delete (styles["&:after"] as any)["content"]
							return {
								...styles,
								display: "flex",
							}
						},
					}}
				/>
			</div>
		)
	}
	return <div style={{ maxWidth: "100vw", padding: 10 }}>{items}</div>
}

export default App
