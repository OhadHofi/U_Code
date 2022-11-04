import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "this text from getStuff!"
  }

  getMorningGreeting() {
    return <div>good morning</div>
  }

  getEveningGreeting() {
    return <div>good evening</div>
  }

  showCompany(name, revenue) {
    return <div>{name} makes {revenue} every year</div>
  }

  getClassName(temperature) {
    if(temperature < 15){
      return <div id="weatherBox" className="freezing">freezing</div>
    }else if(temperature <30){
      return <div id="weatherBox" className="fair">fair</div>
    }else{
      return <div id="weatherBox" className="hell-scape">hell-scape</div>
    }
  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]

    const hour = new Date().getHours();

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {hour > 12
      ? this.getEveningGreeting()
      : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              this.getMorningGreeting(),
              this.getEveningGreeting(),
              <p>some text</p>
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
              {companies.map((c)=>this.showCompany(c.name, c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(27)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
