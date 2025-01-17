import React from 'react'
import { css } from '@emotion/core'
import { object, string } from 'yup'
import Gravatar from 'react-gravatar'
import { Subscribe } from 'statable'
import Field from '../components/field'
import Button from '../components/button'
import Form from '../components/form'
import Error from '../components/error-message'
import Success from '../components/success-message'
import Loading from '../components/loading'
import authState from '../state/auth'

const avatarSize = 100

export default class CommentForm extends React.Component{

	render(){
		return (
			<Subscribe to={authState}>
				{({ user, loadingUser }) => {
					if (loadingUser) return <Loading />
					return <Form
						action='/.netlify/utils/comment-to-markdown'
						initialValues={{
							email: user.email || ``,
							name: user.name || user.nickname || user.email || ``,
							comment: ``,
							slug: this.props.slug,
						}}
						validationSchema={object().shape({
							email: string()
								.email()
								.required(`required`),
							name: string()
								.required(`required`),
							comment: string()
								.required(`required`),
						})}

						error={
							<Error>Server error! Your comment was not sent.</Error>
						}
						success={
							<Success>Thank you for your comment! It will be visible once approved.</Success>
						}
						loading={
							<Loading />
						}
						form={props => (
							<div css={styles.formCols}>
								<div>
									<Gravatar
										email={props.values.email}
										rating='pg'
										default='mp'
										size={avatarSize}
									/>
									<div css={styles.gravatarNotice}>
										Avatar provided by <a href='https://gravatar.com/'>Gravatar</a>
									</div>
								</div>
								<div>
									<Field
										label='Email'
										name='email'
										type='email'
										{...props}
									/>
									<Field
										label='Name'
										name='name'
										{...props}
									/>
									<Field
										label='Comment'
										name='comment'
										component='textarea'
										{...props}
									/>

									<input type='hidden' name='slug' value={props.values.slug} />

									<div css={styles.inputBlock}>
										<Button
											type='submit'
											disabled={props.isSubmitting}
										>
											Submit
										</Button>
									</div>
								</div>
							</div>
						)}
					/>
				}}
			</Subscribe>

		)
	}
}

const styles = {
	inputBlock: css`
		margin-bottom: 20px;
	`,
	errorMsg: css`
		margin-top: 3px;
		font-size: .75em;
		color: #f44336;
		:first-letter{
			text-transform: uppercase;
		}
	`,
	gravatarNotice: css`
		font-size: .7em;
		margin-top: 5px;
	`,
	formCols: css`
		display: flex;
		> div{
			:first-of-type{
				width: ${avatarSize}px;
				padding-top: 16px;
				text-align: center;
			}
			:last-of-type{
				padding-left: 30px;
				width: calc(100% - ${avatarSize}px);
			}
		}
	`,
	recaptcha: css`
		display: none;
	`,
}