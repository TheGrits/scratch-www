var React = require('react');
var render = require('../../lib/render.jsx');
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../components/page/www/page.jsx');

require('./moderator.scss');

var Moderator = React.createClass({
    type: 'Moderator',
    render: function () {
        return (
        
        );
    }
});

render(<Page><Moderator /></Page>, document.getElementById('app'));
