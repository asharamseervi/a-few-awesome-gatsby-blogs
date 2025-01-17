import React from 'react'
import { graphql } from 'gatsby'
import { addToCart } from '@escaladesports/zygote-cart'
import Img from '../components/netlify-image'
import Layout from '../components/layouts/default'
import Price from '../components/price'
import Stock from '../components/stock'
import Carousel from '../components/photo-carousel'

export default class ProductTemplate extends React.Component{
	constructor(props){
		super(props)

		// Props that can change when a variant is selected
		const variantProps = [
			`color`,
			`id`,
		]

		// Set parent product props to state
		const {
			frontmatter,
			frontmatter: {
				variants,
			},
		} = props.data.markdownRemark
		const state = {}
		variantProps.forEach(prop => {
			state[prop] = frontmatter[prop]
		})
		this.state = state

		// Store all variants including parent
		this.allVariants = [{ ...state }, ...variants]
	}
	render(){
		const {
			props: {
				data: {
					markdownRemark: {
						frontmatter: {
							title,
							images,
						},
						html,
						excerpt,
					},
					escaladePricing,
					escaladeInventory,
				},
			},
			state: {
				color,
				id,
			},
		} = this

		const price = escaladePricing ? escaladePricing.price : null
		const stock = escaladeInventory ? escaladeInventory.stock : null
		const hasImages = images && !!images.length
		const imageRatio = [16, 9]
		const thumbnail = hasImages ?
			`${images[0]}?nf_resize=fit&w=150&h=150` :
			null
		return(
			<Layout title={title} description={excerpt}>
				<h1>{title}</h1>

				{hasImages && (
					<Carousel ratio={imageRatio} slides={images.map((url, index) => (
						<Img
							ratio={imageRatio}
							key={`img${index}`}
							src={url}
							alt={`${title} ${index + 1}`}
						/>
					))} />
				)}

				<ul>
					{this.allVariants.map((variant, index) => (
						<li key={index}>
							{variant.id === id && variant.color}
							{variant.id !== id && (
								<a href='#' onClick={e => {
									e.preventDefault()
									this.setState(variant)
								}}>
									{variant.color}
								</a>
							)}
						</li>
					))}
				</ul>

				<Price id={id} price={price}>
					{price => (
						<button
							onClick={() => addToCart({
								id,
								name: title,
								image: thumbnail,
								description: `Color: ${color}`,
								price: parseInt(price.toString().replace(`.`, ``)),
								shippable: true,
							})}
						>
							Add to Cart
						</button>
					)}
				</Price>

				<ul>
					<li>Color: {color}</li>
					<li>ID: {id}</li>
					<li>Price: $<Price id={id} price={price} /></li>
					<li>
						<Stock stock={stock} id={id}>
							{stock => <>
								{!!stock && `In stock`}
								{!stock && `Out of stock`}
							</>}
						</Stock>
					</li>
				</ul>
				<div dangerouslySetInnerHTML={{__html: html}} />
			</Layout>
		)
	}
}

export const query = graphql`
	query ProductTemplate($id: String!) {
		markdownRemark(
			frontmatter: {
				id: { eq: $id }
			}
		){
			frontmatter{
				title
				price
				color
				id
				images
				variants{
					color
					id
				}
			}
			html
			excerpt(pruneLength: 175)
		}

		escaladePricing(
			productId: { eq: $id }
		){
			price
		}
		escaladeInventory(
			productId: { eq: $id }
		){
			stock
		}
	}
`