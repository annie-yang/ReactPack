var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();

    var location = this.refs.searchReference.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.searchReference.value = '';
      window.location.hash = '#/weather?location=' + encodedLocation;
    }
  },
  render:function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text nav-text">React Pack</li>
            <li>
              <IndexLink className="nav-text" to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Greeter</IndexLink>
            </li>
            <li>
              <Link className="nav-text" to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</Link>
            </li>
            <li>
              <Link className="nav-text" to="/timer" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
              <Link className="nav-text" to="/countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="searchReference" placeholder="Search weather by city"></input>
              </li>
              <li>
                <input type="submit" className="button nav-button-text" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
