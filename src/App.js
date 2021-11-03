import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
// import mockCats from './mockCats.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount() {
    this.catRead()
  }

  catRead = () => {
    fetch('http://localhost:3000/cats')
    .then((response) => response.json())
    // set the state with the data from the backend into the empty array
    .then(catsArray => this.setState({cats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
  }

  createNewCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (response.status === 422) {
          alert("Please check your submission.")
        }
        return response.json()
      })
      .then(payload => this.catRead())
      .catch((errors) => console.log("Cat create errors:", errors))
  }

  updateCat = (editCat, id) => {
    console.log("cat:", editCat)
    console.log("id:", id)
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            path='/catindex'
            render={(props) => <CatIndex cats={this.state.cats} />}
          />
          <Route
            path='/catshow/:id'
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find((c) => c.id === +id)
              console.log(cat)
              return <CatShow cat={cat} />
            }}
          />
          <Route
            path='/catnew'
            render={(props) => <CatNew createNewCat={this.createNewCat} />}
          />
          <Route
            path='/catedit/:id'
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.cats.find(cat => cat.id === +id)
              return <CatEdit updateCat={this.updateCat} cat={cat} />
            }}/>
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}
