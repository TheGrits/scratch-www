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
                    <h4>3. Rules of Usage</h4>
                    <p>
                        3.1 The Scratch Team supports freedom of expression. However, Scratch is
                         intended for a wide audience, and some content is inappropriate for the
                         Scratch community. You may not use the Scratch service in any way, that:
                        <ol>
                            <li>
                                Promotes bigotry, discrimination, hatred, or violence against any
                                 individual or group;
                            </li>
                            <li>
                                Threatens, harasses, or intimidates any other person, whether that
                                 person is a Scratch user or not;
                            </li>
                            <li>Contains foul language or personal attacks;</li>
                            <li>Contains sexually explicit or graphically violent material;</li>
                            <li>
                                Provides instructions on how to commit illegal activities or obtain
                                 illegal products;
                            </li>
                            <li>
                                Except in connection with organizing Scratch day events, asks any
                                 other user for personally identifying information, contact
                                 information, or passwords; or
                            </li>
                            <li>
                                Exposes any others person's personally identifying information,
                                 contact information, or passwords without that person's permission.
                            </li>
                        </ol>
                    </p>
                    <p>
                        3.3 You agree to comply with all applicable laws and regulations when you use
                         Scratch. You may not use Scratch in any unlawful way, including to harass,
                         stalk, or defame any other person.
                    </p>
                    <p>
                        3.4 You may not impersonate, imitate or pretend to be somebody else when using
                         the Services.
                    </p>
                    <p>
                        3.5 You agree not to use Scratch in any way intended to disrupt the service,
                         gain unauthorized access to the service, or interfere with any other user's
                         ability to use the service. Prohibited activities include, but are not limited
                         to:
                        <ol>
                            <li>
                                Posting content deliberately designed to crash the Scratch
                                 website or editor;
                            </li>
                            <li>
                                Linking to pages containing viruses or malware;
                            </li>
                            <li>
                                Using administrator passwords or pretending to be an administrator;
                            </li>
                            <li>
                                Repeatedly posting the same material, or "spamming";
                            </li>
                            <li>
                                Using alternate accounts or organizing voting groups to manipulate
                                 site statistics, such as purposely trying to get on the "What the
                                 Community is Loving/Remixing" rows of the front page.
                            </li>
                        </ol>
                    </p>
                    <p>
                        3.6 Commercial use of Scratch, user-generated content, and support
                         materials is permitted under the{' '}
                         <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                         Creative Commons Attribution-ShareAlike 2.0 license. However,
                         the Scratch Team reserves the right to block any commercial use
                         of Scratch that, in the Scratch Team's sole discretion, is harmful
                         to the community. Harmful commercial use includes spamming or
                         repeated advertisement through projects, comments, or forum posts.
                    </p>
                    <p>
                        3.7 You agree not to post links to any content outside of the
                        Scratch website, if to do so would violate any part of the Terms of Use.
                    </p>
                </Box>
            </div>
        );
    }
});

render(<Page><Termsofuse /></Page>, document.getElementById('app'));
