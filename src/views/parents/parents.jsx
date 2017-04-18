var React = require('react');
var render = require('../../lib/render.jsx');

var FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
var FormattedMessage = require('react-intl').FormattedMessage;

var Page = require('../../components/page/www/page.jsx');
var FlexRow = require('../../components/flex-row/flex-row.jsx');
var SubNavigation = require('../../components/subnavigation/subnavigation.jsx');
var TitleBanner = require('../../components/title-banner/title-banner.jsx');

require('./parents.scss');

var Parents = React.createClass({
  
});
render(<Page><Parents /></Page>, document.getElementById('app'));
