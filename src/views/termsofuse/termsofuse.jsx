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
                         <a href="https://scratch.mit.edu">scratch.mit.edu</a>{' '}
                         and all associated services, including but not limited
                         to the <a href="http://day.scratch.mit.edu">Scratch Day</a>{' '}
                         and <a href="http://scratchx.org">ScratchX</a> websites 
                         (collectively "Scratch"). The Scratch Team is part of the
                         Lifelong Kindergarten Group in the Media Laboratory at the
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
                         <a href="/community_guidelines">Scratch Community Guidelines</a>.
                    </p>
                    <p>
                        1.4 The Scratch Team may change the Terms of Use from time to
                         time. You can always find the latest version of the Terms of Use
                         at <a href="/terms_of_use">http://scratch.mit.edu/terms_of_use</a>.
                         The date of the most recent revisions will appear on this page.
                         Your continued use of the Services constitutes your acceptance
                         of any changes to or revisions of the Terms of Use.
                    </p>
                    <h4>2. Account Creation and Maintenance</h4>
                    <p>
                        2.1 In order to use some features of the Services, you will need to
                         register with Scratch and create an account. Creating an account is
                         optional, but without an account you will not be able to save or
                         publish projects or comments on Scratch. When registering for a
                         personal account, you will be asked to provide certain personal
                         information, such as your email address, gender, birth month and
                         year, and country. Please see Scratch's{' '}
                         <a href="/privacy_policy">Privacy Policy</a> for Scratch's data
                         retention and usage policies.
                    </p>
                    <p>
                        2.2 You are responsible for keeping your password secret and your
                         account secure. You are solely responsible for any use of your
                         account, even if your account is used by another person. If any use
                         of your account violates the Terms of Service, your account may be
                         suspended or deleted.
                    </p>
                    <p>
                        2.3 You may not use another person's Scratch account without permission.
                    </p>
                    <p>
                        2.4 Account names cannot be changed. If you want a different account name,
                         create a new account and copy your existing projects over by hand.
                    </p>
                    <p>
                        2.5 If you have reason to believe that your account is no longer secure
                         (for example, in the event of a loss, theft, or unauthorized disclosure
                         of your password), promptly change your password. If you cannot access
                         your account to change your password, notify us at{' '}
                         <a href="mailto:help@scratch.mit.edu"></a>.
                    </p>
                </Box>
            </div>
        );
    }
});

render(<Page><Termsofuse /></Page>, document.getElementById('app'));
