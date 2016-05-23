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
                         Creative Commons Attribution-ShareAlike 2.0 license</a>. However,
                         the Scratch Team reserves the right to block any commercial use
                         of Scratch that, in the Scratch Team's sole discretion, is harmful
                         to the community. Harmful commercial use includes spamming or
                         repeated advertisement through projects, comments, or forum posts.
                    </p>
                    <p>
                        3.7 You agree not to post links to any content outside of the
                        Scratch website, if to do so would violate any part of the Terms of Use.
                    </p>
                    <h4>4. User-Generated Content and Licensing</h4>
                    <p>
                        4.1 For the purposes of the Terms of Use, "user-generated content"
                         includes any projects, comments, forum posts, or links to third
                         party websites that a user submits to Scratch.
                    </p>
                    <p>
                        4.2 The Scratch Team encourages everyone to foster creativity by
                         freely sharing code, art, music, and other works. However, we
                         also understand the need for individuals and companies to protect
                         their intellectual property rights. You are responsible for making
                         sure you have the necessary rights, licenses, or permission for
                         any user-generated content you submit to Scratch.
                    </p>
                    <p>
                        4.3 All user-generated content you submit to Scratch is licensed
                         to and through Scratch under the{' '}
                         <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                         Creative Commons Attribution-ShareAlike 2.0 license</a>. This
                         allows others to view and remix your content. This license also
                         allows the Scratch Team to display, distribute, and reproduce
                         your content on the Scratch website, through social media
                         channels, and elsewhere. If you do not want to license your
                         content under this license, then do not share it on Scratch.
                    </p>
                    <p>
                        4.4 You may only submit user-generated projects that were created
                         with (1) the Scratch website editor or (2) an unmodified copy of
                         the Scratch editor compiled from the source code described in
                         Section 5.3. You may not upload any projects that were created, by
                         you or by anyone else, with a modified version of the Scratch editor.
                    </p>
                    <p>
                        4.5 Although the Scratch Team requires all users to comply with
                         these Terms of Use, some inappropriate user-generated content
                         may be submitted and displayed on the Scratch website. You
                         understand that when you use Scratch you may be exposed to
                         user-generated content that you find objectionable or offensive.
                         If you see any content that violates the Community Guidelines
                         or Terms of Use, please let us know by using the "Report this"
                         button. You only need to report an item once. The Scratch Team
                         reviews reported content every day.
                    </p>
                    <p>
                        4.6 In addition to reviewing reported user-generated content, the
                         Scratch Team reserves the right, but is not obligated, to monitor
                         all uses of the Scratch service. The Scratch Team may edit, move,
                         or delete any content that violates the Terms of Use or Community
                         Guidelines, without notice.
                    </p>
                    <p>
                        4.7 All user-generated content is provided as-is. The Scratch Team
                         makes no warranties about the accuracy or reliability of any
                         user-generated content available through Scratch and does not
                         endorse Scratch Day events or vet or verify information posted in
                         connection with said events. The Scratch Team does not endorse any
                         views, opinions, or advice expressed in user-generated content. You
                         agree to relieve the Scratch Team of any and all liability arising
                         from your user-generated content and from Scratch Day events you
                         may organize or host.
                    </p>
                    <h4>5. Scratch Content and Licensing</h4>
                    <p>
                        5.1 Except for any user-generated content, the Scratch Team owns and
                         retains all rights in and to the Scratch code, the design,
                         functionality, and architecture of Scratch, and any software or
                         content provided through Scratch (collectively "the Scratch IP").
                         If you want to use Scratch in a way that is not allowed by these
                         Terms of Use, you must first contact the Scratch Team. Except for
                         any rights explicitly granted under these Terms of Use, you are not
                         granted any rights in and to any Scratch IP.
                    </p>
                    <p>
                        5.2 Scratch provides support materials, including images, sounds,
                         video, and sample code, to help users build projects. Support materials
                         are licensed under the{' '}
                         <a href="https://creativecommons.org/licenses/by-sa/2.0/">
                         Creative Commons Attribution-ShareAlike 2.0 license</a>. You may also
                         use screenshots of Scratch under the same license. Please note that
                         this does not apply to materials that are also trademarked by the
                         Scratch Team or other parties as described in parts 5.4 and 5.5, below.
                         <br/>
                         The Creative Commons Attribution-ShareAlike 2.0 license requires you to
                         attribute any material you use to the original author. When you use
                         Scratch support materials, or screenshots of the Scratch website,
                         please use the following attribution: "Scratch is developed by the
                         Lifelong Kindergarten Group at the MIT Media Lab. See
                         http://scratch.mit.edu."
                    </p>
                    <p>
                        5.3 The source code for Scratch 1.4 is available for download and subject
                         to the copyright notice as indicated on the <a href="/info/faq">Scratch FAQ</a>
                         {' '}page.
                    </p>
                    <p>
                        5.4 The Scratch name, Scratch logo, Scratch Day logo, Scratch Cat, and Gobo
                         are Trademarks owned by the Scratch Team. The MIT name and logo are Trademarks
                         owned by the Massachusetts Institute of Technology. Unless you are licensed by
                         Scratch under a specific licensing program or agreement, you many not use
                         these logos to label, promote, or endorse any product or service. You may use
                         the Scratch Logo to refer to the Scratch website and programming language.
                    </p>
                    <p>
                        5.5 The Scratch support materials library may contain images and sounds that
                         are trademarked by third parties. The fact that materials are included in
                         the Scratch support materials library does not in any way limit or reduce 
                         intellectual property rights, including trademark rights, otherwise
                         available to the materials' owners. Nothing in these Terms of Use or the
                         Creative Commons 2.0 license will be construed to limit or reduce any
                         party's rights in that party's valid trademarks. You may not use these
                         materials to label, promote, or endorse any product or service. You are
                         solely responsible for any violation of a third party's intellectual
                         property rights caused by your misuse of these materials.
                    </p>
                </Box>
            </div>
        );
    }
});

render(<Page><Termsofuse /></Page>, document.getElementById('app'));
