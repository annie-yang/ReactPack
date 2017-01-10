var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render:function(){
    return(
      <div>
        <h3>Nav component</h3>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Main</IndexLink>
        <Link to="/greeter" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Greeter</Link>
      </div>
    );
  }
});

module.exports = Nav;
