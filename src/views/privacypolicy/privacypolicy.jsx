var React = require('react');
var FormattedMessage = require('react-intl').FormattedMessage;
var render = require('../../lib/render.jsx');
var Page = require('../../components/page/www/page.jsx');
var Box = require('../../components/box/box.jsx');

var Privacypolicy = React.createClass({
    type: 'Privacypolicy',
    render: function () {
        return (
            <div className="inner privacypolicy">
                <Box title={'Scratch Privacy Policy'}>
                    <p>
                        We made Scratch so people like you could create projects,
                         share ideas, and build a community. To make this happen,
                         we collect some information for our users. The Scratch Team
                         understands how important privacy is to our community,
                         especially kids and parents. We wrote this privacy policy
                         to explain what information we collect, how we use it,
                         and what we're doing to keep it safe. If you have any
                         questions regarding this privacy policy, you can
                         <a href="/contact-us">contact us</a>.
                    </p>
                    <p><i>
                        Please do not share personal contact information, such as
                         your name, physical address, email address, phone number,
                         or anything else that can be used to make contact outside
                         of the Scratch website. Please report projects, comments,
                         or forum posts that contain this kind of information so
                         the Scratch team can remove it, and please remind the
                         author of our policy.
                    </i></p>
        );
    }
});
