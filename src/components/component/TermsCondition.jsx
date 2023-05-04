/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsCondition = () => {
    return (
        <div>
           <Container>
      <h1>Terms and Conditions</h1>
      <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>

      <p>The use of this website is subject to the following terms of use:</p>
      <ul>
        <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
        <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
        <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
        <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
        <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</li>
        <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
        <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of [country].</li>
      </ul>
      <Link to='/register'>Go back to Register Page</Link>
    </Container>
        </div>
    );
};

export default TermsCondition;