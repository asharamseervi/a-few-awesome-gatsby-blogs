import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import { Cart } from '@escaladesports/zygote-cart'
import * as escaApi from '@escaladesports/zygote-plugin-esca-api'
import * as standardPayment from '@escaladesports/zygote-cart/dist/plugins/zygote-plugin-standard-billing'
import 'typeface-open-sans'
import 'typeface-oswald'
import RouteDelayed from '../../../plugins/route-delayed-animation'
import Header from '../header'
import Footer from '../footer'
import RouteDelayedAnimation from '../route-delayed-animation'
import {
	white,
	primaryColor,
} from '../../styles/colors'
import {
	primaryFont,
	secondaryFont,
} from '../../styles/fonts'
import linkMixin from '../../styles/mixins/link'
import '../../styles/global.css'

export default class Layout extends React.Component{
	render(){
		const {
			title,
			description,
		} = this.props
		return(
			<StaticQuery
				query={graphql`
					query DefaultTemplateQuery{
						site{
							siteMetadata{
								siteTitle: title
								siteDescription: description
							}
						}
					}
				`}
				render={({
					site: {
						siteMetadata: {
							siteTitle,
							siteDescription,
						},
					},
				}) => (
					<>
						<Helmet>
							<html lang='en' />
							<title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
							<meta name='description' content={description || siteDescription} />
							<meta property='og:title' content={title} />
							<meta property='og:site_name' content={siteTitle} />
						</Helmet>
						<div css={styles.layout}>
							<Header />
							<div css={styles.content}>
								<main>{this.props.children}</main>
							</div>
							<Footer />
						</div>
						<RouteDelayed>
							<RouteDelayedAnimation />
						</RouteDelayed>
						<Cart
							styles={{
								zIndex: 9999,
								borderColor: `#28cefc`,
								primaryColor: `#28cefc`,
								overlayColor: `rgba(40,206,252,0.7)`,
							}}
							header={<h1>Project Boilerplate</h1>}
							infoWebhook='/api/inventory/load'
							splitName={true}
							plugins={[
								standardPayment,
								escaApi,
							]}
							totalModifications={[
								{
									id: `shipping`,
									description: `Shipping`,
									displayValue: `-`,
								},
								{
									id: `tax`,
									description: `Tax`,
									displayValue: `-`,
								},
							]}
						/>
					</>
				)}
			/>
		)
	}
}


const styles = {
	layout: css`
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: ${secondaryFont};
		a{
			${linkMixin};
		}
		p{
			line-height: 28px;
		}
		h1, h2, h3{
			font-family: ${primaryFont};
			text-transform: uppercase;
		}
		li{
			line-height: 1.3em;
			margin-bottom: 4px;
		}
		& ::selection{
			color: ${white};
			background-color: ${primaryColor};
		}
	`,
	content: css`
		margin: 0 auto;
		padding: 0 30px;
		max-width: 960px;
		width: 100%;
		flex: 1 0 auto;
	`,
}