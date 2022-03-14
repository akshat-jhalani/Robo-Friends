import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots:[],
            searchBox: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {this.setState({robots: users})})
    }

    onSearchChange = (event) => {
        this.setState({searchBox: event.target.value})
    }

    render(){
        const fileteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchBox.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>API Down :( </h1>
        }
        else{
            return(
                <div className = 'tc'>
                    <h1 className = 'f1'>Robo Friends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {fileteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App;