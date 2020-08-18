import React, { Component } from "react";
import { getLeads } from "../../actions/leads";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Fragment } from "react/cjs/react.production.min";

export class Leads extends Component {
	static propTypes = {
		leads: PropTypes.array.isRequired,
	};
	componentDidMount() {
		this.props.getLeads();
	}
	render() {
		return (
			<Fragment>
				<h2>Leads</h2>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Message</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{this.props.leads.map((lead) => (
							<tr key={lead.id}>
								<td>{lead.id}</td>
								<td>{lead.username}</td>
								<td>{lead.message}</td>
							</tr>
						))}
					</tbody>
				</table>
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads })(Leads);
