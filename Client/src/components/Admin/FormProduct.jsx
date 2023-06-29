import {
	Box,
	Button,
	Card,
	Container,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Select,
	Text,
	Flex,
	WrapItem,
	Wrap,
	NumberInput,
	NumberInputField,
} from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/actions/actions"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const initialFormState = {
	name: "",
	description: "",
	type: "",
	gender: "",
	color: "",
	price: undefined,
	articleID: "",
	active: true,
	image: "",
	size: {},
	shoeSize: {},
}

const initialErrors = {
	name: "",
	description: "",
	type: "",
	gender: "",
	color: "",
	price: undefined,
	articleID: "",
	active: true,
	image: "",
	size: {},
	shoeSize: {},
}

const FormProduct = () => {
	const dispatch = useDispatch()
	const [form, setForm] = useState(initialFormState)
	const [disableSubmit, setDisableSubmit] = useState(true)

	console.log("disable submit :", disableSubmit)

	useEffect(() => {
		handleDisable({ ...form })
	}, [form])

	const handleChange = e => {
		const { name, value } = e.target
		setForm(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSizeChange = e => {
		e.preventDefault()
		let { name, value } = e.target
		if (value === '') value = 0

		setForm(prev => {
			if (form.type === "shoes") {
				return {
					...prev,
					shoeSize: {
						...prev.shoeSize,
						[name]: parseInt(value),
					},
				}
			} else
				return {
					...prev,
					size: {
						...prev.size,
						[name]: parseInt(value),
					},
				}
		})
	}

	console.log(form)

	const handleDisable = form => {
		const values = Object.values(form)
		console.log("values: ", values)
		// const allKeysFilled = values.every(value => value.length > 0)
		const allKeysFilled = values.every(value => !!value)

		setDisableSubmit(!allKeysFilled)
	}

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addProduct(form))
	}
	const handleReset = event => {
		event.preventDefault()
		setForm(initialFormState)
	}

	const sizes = {
		shoeSizes: Array.from({ length: 12 }, (_, index) => index + 35),
		clotheSizes: ["S", "M", "L", "XL", "Unique"],
	}

	const SizeOptionsRender = () => {
		if (form.type === "shoes") {
			return (
				<Wrap spacing="2">
					{sizes.shoeSizes.map(size => (
						<WrapItem key={size} flexBasis="16.666%" flexGrow="0">
							<FormLabel>{size}</FormLabel>
							<Input
								type="number"
								name={size}
								defaultValue={0}
								value={form.shoeSize[size]}
								onChange={handleSizeChange}
							/>
						</WrapItem>
					))}
				</Wrap>
			)
		} else {
			return (
				<Wrap spacing="2">
					{sizes.clotheSizes.map(size => (
						<WrapItem key={size} flexBasis="16.666%" flexGrow="0">
							<FormLabel>{size}</FormLabel>
							<Input type="number" name={size} defaultValue={0} value={form.size[size]} onChange={handleSizeChange} />
						</WrapItem>
					))}
				</Wrap>
			)
		}
	}

	return (
		<Container w="100%" marginTop={10}>
			<Box display={"flex"} justifyContent={"space-between"} marginBottom="15px">
				<Button colorScheme="cyan" size="lg" variant="solid" m="6">
					<Link to="/CrudProduct">Back</Link>
				</Button>
				<Button colorScheme="orange" size="lg" variant="solid" m="6">
					<Link to="/">Home</Link>
				</Button>
			</Box>
			<Box padding={4}>
				<Heading>Add Product</Heading>
				<form onSubmit={handleSubmit}>
					<FormControl>
						<FormLabel>Name</FormLabel>
						<Input type="text" name="name" placeholder="name of product" onChange={handleChange} />
						<FormLabel mb="8px">Description:</FormLabel>
						<Input
							type="text"
							name="description"
							placeholder="description"
							value={form.description}
							onChange={handleChange}
							size={"md"}
						/>
						<FormLabel>Type</FormLabel>
						<Select name="type" value={form.type} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Tshirt">Tshirt</option>
							<option value="sweatshirt">sweatshirt</option>
							<option value="jacket">jacket</option>
							<option value="pant">pant</option>
							<option value="accesories">accesories</option>
							<option value="shoes">shoes</option>
							<option value="equipment">equipment</option>
						</Select>
						<FormLabel>Gender</FormLabel>
						<Select name="gender" value={form.gender} onChange={handleChange}>
							<option value="none">none</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</Select>
						<FormLabel>Color</FormLabel>
						<Select name="color" value={form.color} onChange={handleChange}>
							<option value="option1">none</option>
							<option value="option2">Black</option>
							<option value="option3">White</option>
							<option value="option4">Grey</option>
							<option value="option5">Blue</option>
							<option value="option6">Red</option>
							<option value="option7">Yellow</option>
							<option value="option8">Brown</option>
							<option value="option9">Pink</option>
						</Select>

						<FormLabel>Sizes</FormLabel>
						<SizeOptionsRender />

						<FormLabel>ArticleID</FormLabel>
						<Input
							type="text"
							placeholder="ArticleID"
							name="articleID"
							value={form.articleID}
							onChange={handleChange}
						/>
						<FormLabel>Price $</FormLabel>
						<NumberInput
							name="price"
							value={form.price}
							onChange={value => handleChange({ target: { name: "price", value: parseInt(value) } })}
						>
							<NumberInputField />
						</NumberInput>
						<FormLabel>Image</FormLabel>
						<Input type="text" placeholder="Image" name="image" value={form.image} onChange={handleChange} />
					</FormControl>
					<Box marginTop={4} display={"flex"} justifyContent={"space-between"}>
						<Button type="submit" isDisabled={disableSubmit}>
							Add
						</Button>
						<Button onClick={handleReset}>Cancel</Button>
					</Box>
				</form>
			</Box>
		</Container>
	)
}

export default FormProduct
