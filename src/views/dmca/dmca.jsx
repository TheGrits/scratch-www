var React = require('react');
var FormattedMessage = require('react-intl').FormattedMessage;
var render = require('../../lib/render.jsx');
var Page = require('../../components/page/page.jsx');
var Box = require('../../components/box/box.jsx');

require('./dmca.scss');

var Dmca = React.createClass({
  type: 'Dmca',
  render: function () {
    return (
      <Box title={'DMCA'}>

      </Box>
    );
  }
});

render(<Page><Dmca /></Page>, document.getElementById('app'));
