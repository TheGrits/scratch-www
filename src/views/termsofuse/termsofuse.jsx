var React = require('react');
var render = require('../../lib/render.jsx');
var Page = require('../../components/page/www/page.jsx');
var Box = require('../../components/box/box.jsx');

var Termsofuse = React.createClass({
    type: 'Termsofuse',
    render: function () {
        return (
            <div className="inner termsofuse">
                <Box title={'Scratch Terms of Use'}>
                    <h4>1. User Agreement</h4>
                    <p>
                        1.1 These Terms of Use constitute an agreement between
                         you and the Scratch Team that governs your use of{' '}
                         <a href="scratch.mit.edu">scratch.mit.edu<a/>{' '}
                         and all associated services, including but not limited
                         to the <a href="day.scratch.mit.edu">Scratch Day</a>{' '}
                         and <a href="scratchx.org">ScratchX</a> websites (collectively
                         "Scratch"). The Scratch Team is part of the Lifelong
                         Kindergarten Group in the Media Laboratory at the
                         Massachusetts Institute of Technology ("MIT"). Please
                         read the Terms of Use carefully. By using Scratch you
                         affirm that you have read, understood, and accepted
                         the terms and conditions in the Terms of Use. If you
                         do not agree with any of these conditions, please do not
                         use Scratch.
                    </p>
                    <p>
                        1.2 Your privacy is important to us. Please read our{' '}
                         <a href="/privacy_policy">Privacy Policy</a>, which identifies
                         how the Scratch Team uses, collects, and stores information
                         it collects through the Services. By using Scratch, you
                         additionally agree that you are comfortable with Scratch's
                         Privacy Policy.
                    </p>
                    <p>
                        1.3 Scratch is open to children and adults of all ages, and
                         we ask that you keep this in mind when using the Scratch
                         services. When you use Scratch, you agree to abide by the
                         <a href="/community_guidelines">Scratch Community Guidelines<a/>.
                    </p>
                    <p>
                        1.4 The Scratch Team may change the Terms of Use from time to
                        time. You can always find the latest version of the Terms of Use
                        at <a href="/terms_of_use">http://scratch.mit.edu/terms_of_use</a>.
                        The date of the most recent revisions will appear on this page.
                        Your continued use of the Services constitutes your acceptance
                        of any changes to or revisions of the Terms of Use.
                    </p>
                </Box>
            </div>
        );
    }
});

render(<Page><Termsofuse /></Page>, document.getElementById('app'));
