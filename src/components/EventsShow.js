import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form'
import { Link } from 'react-router-dom';
import {getEvent, deleteEvent, putEvent} from '../actions';
import Button from '@material-ui/core/Button';

class EventsShow extends Component {
	
	constructor(props) {
		super(props)
		this.onSubmit = this.onSubmit.bind(this);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}

	componentDidMount = () => {
		const { id } = this.props.match.params
		if (id) this.props.getEvent(id);
	}
	
	renderField = (field) => {
		const { input, label, type, meta: { touched, error } } = field;

		return (
			<div>
				<input {...input} placeholder={label} type={type} />
				{touched && error && <span>{error}</span>}
			</div>
		)
	}

	async onSubmit(values){
		await this.props.putEvent(values)
		this.props.history.push('/');
	}

	async onDeleteClick(){
		const {id} = this.props.match.params;
		await this.props.deleteEvent(id);
		this.props.history.push('/');
	} 

	render() {
		const { handleSubmit, pristine, submitting,invalid } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
				<div>
					<Field label="Title" name="title" type="text" component={this.renderField} />
					<Field label="Body" name="body" type="text" component={this.renderField}/>
				</div>
				<div>
					
					<Button type="submit" value="Submit" color="secondary" disabled={pristine || submitting || invalid} >送信</Button>
					<Link to="/"><Button type="submit" color="primary"  >キャンセル</Button></Link>
					<Link to="/" onClick={() => {this.onDeleteClick()}}><Button type="submit" color="primary"  >Delete</Button></Link>
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
const mapDispatchToProps = { deleteEvent, getEvent, putEvent };

const mapStateToProps = (state, ownProps) => {
	const event = state.events[ownProps.match.params.id]
	return {initialValues: event, event}
}

export default connect(mapStateToProps, mapDispatchToProps)(
		reduxForm({validate, form:'eventShowForm', enableReinitialize: true})(EventsShow)
);
