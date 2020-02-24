import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom';
import { postEvent } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EventsNew extends Component {
	
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
	}
	
	renderField = (field) => {
		const { input, label, type, meta: { touched, error } } = field;

		return (
				<TextField
					label={label}
					type={type}
					fullWidth={true}
					errortext={touched && error}
					{...input}
				/>
		)
	}

	async onSubmit(values){
		await this.props.postEvent(values)
		this.props.history.push('/');
	}


	render() {
		const { handleSubmit, pristine, submitting, invalid } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<div>
					<Field label="Title" name="title" type="text" component={this.renderField} />
					<Field label="Body" name="body" type="text" component={this.renderField}/>
				</div>
				<div>
					<Button type="submit" value="Submit" color="secondary" disabled={pristine || submitting || invalid} >送信</Button>
					<Link to="/"><Button type="submit" color="primary"  >キャンセル</Button></Link>
				</div>
			</form>
		);
	}
}

const validate = values => {
	const errors = {}
	
	if (!values.title) {
		errors.title = "Enter a title, please.";
	}
	if (!values.body) {
		errors.body = "Enter a body, please.";
	}
	return errors;
}
const mapDispatchToProps = { postEvent };

export default connect(null, mapDispatchToProps)(
		reduxForm({validate, form:'eventNewForm'})(EventsNew)
);