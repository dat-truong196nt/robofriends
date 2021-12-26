import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = (state) => ({
  searchField: state.onSearchChange.searchField,
  robots: state.onRequestRobots.robots,
  error: state.onRequestRobots.error,
  isPending: state.onRequestRobots.isPending,
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  fetchingRobots: () => dispatch(requestRobots)
})

const App = (props) => {
  const { robots, isPending, error, fetchingRobots } = props;
  const { searchField, onSearchChange } = props;

  // ComponentDidMount
  useEffect(fetchingRobots, [])

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return isPending ?
    <h1>Loading</h1> :
    error ? <h1>Failed for fetching robots. Please refresh the page ...</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);