var React = require('react');
var FormattedMessage = require('react-intl').FormattedMessage;

var render = require('../../lib/render.jsx');
var Page = require('../../components/page/page.jsx');

require('./guidelines.scss');

var Guidelines = React.createClass({
    type: 'Guidelines',
    render: function () {
        return (
            <div className="body">
                <div className="top">
                    <h1>
                    <FormattedMessage
                    id: ’guidelines.title’ />
                    </h1>
                </div>
                <div className="bottom">
                    <p><FormattedMessage id='guidelines.header' /></p>
                    <ul>
                        <li>
                            <b><FormattedMessage id='guidelines.respectheader' /></b>
                            <p><FormattedMessage id='guidelines.respectbody' /></p>
                        </li>
                        <li>
                            <b><FormattedMessage id='guidelines.constructiveheader' /></b>
                            <p><FormattedMessage id='guidelines.constructivebody' /></p>
                        </li>
                        <li>
                            <b><FormattedMessage id='guidelines.shareheader' /></b>
                            <p><FormattedMessage id='guidelines.sharebody' /></p>
                        </li>
                        <li>
                            <b><FormattedMessage id='guidelines.privacyheader' /></b>
                            <p><FormattedMessage id='guidelines.privacybody' /></p>
                        </li>
                        <li>
                            <b><FormattedMessage id='guidelines.honestyheader' /></b>
                            <p><FormattedMessage id='guidelines.honestybody' /></p>
                        </li>
                        <li>
                            <b><FormattedMessage id='guidelines.friendlyheader' /></b>
                            <p><FormattedMessage id='guidelines.friendlybody' /></p>
                        </li>
                    </ul>
                    <p><FormattedMessage id='guidelines.footer' /></p>
                    <img src="//cdn.scratch.mit.edu/scratchr2/static/images/help/spritesforcommunityguid.png" alt="sprites"/>
                </div>
            </div>
        );
    }
});

render(<Page><Guidelines /></Page>, document.getElementById('app'));
