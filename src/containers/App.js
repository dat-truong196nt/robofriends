import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { setSearchField, setRobots } from '../actions';
import { connect } from 'react-redux';
import './App.css';

const mapStateToProps = (state) => ({
  searchField: state.onSearchChange.searchField,
  robots: state.onRobotRespond.robots,
})

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  fetchingRobots: () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {dispatch(setRobots(users))})
      .catch(err => console.log(err));
  }
})

const App = (props) => {
  const { robots, fetchingRobots } = props;
  const { searchField, onSearchChange } = props;

  useEffect(fetchingRobots, [])

  const filteredRobots = robots.filter(robot =>{
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  return !robots.length ?
    <h1>Loading</h1> :
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