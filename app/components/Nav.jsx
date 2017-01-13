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
            <li className="menu-text">React Pack</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Greeter</IndexLink>
            </li>
            <li>
              <Link to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</Link>
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
                <input type="submit" className="button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
