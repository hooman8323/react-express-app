import React from 'react';
import { connect } from 'react-redux';
import TaskList from './TaskList';

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard!</h2>
        {groups.map(group => (
            <TaskList id={group.id} name={group.name} />
        ))}
    </div>
);

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);