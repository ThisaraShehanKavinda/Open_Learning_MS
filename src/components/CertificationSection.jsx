import { jsPDF } from 'jspdf';
import React from 'react';
import { FaCertificate, FaTrophy } from 'react-icons/fa';
import logo from '../assets/usjp logo.png'; // Make sure this path is correct
import './CertificationSection.css';

const CertificationSection = ({
  isCertificateUnlocked,
  userName,
  courseName,
  badge,
}) => {
  const generateCertificatePDF = () => {
    const doc = new jsPDF();

    // Add the logo to the top left corner
    doc.addImage(logo, 'PNG', 10, 10, 40, 40); // Adjust logo size and position

    // Title and certificate content
    doc.setFont('helvetica');
    doc.setFontSize(22);
    doc.text('Certificate of Completion', 105, 50, null, null, 'center');

    doc.setFontSize(18);
    doc.text('This certifies that', 105, 70, null, null, 'center');
    doc.text(userName, 105, 90, null, null, 'center');

    doc.setFontSize(16);
    doc.text('Has completed the course:', 105, 110, null, null, 'center');
    doc.text(courseName, 105, 130, null, null, 'center');

    // Add date of completion
    const date = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.text(`Date of Completion: ${date}`, 105, 150, null, null, 'center');

    // Add expiration date (1 year from today)
    const expirationDate = new Date();
    expirationDate.setFullYear(expirationDate.getFullYear() + 1);
    doc.text(
      `Expiration Date: ${expirationDate.toLocaleDateString()}`,
      105,
      170,
      null,
      null,
      'center'
    );

    // Generate a random certificate ID
    const certificateID =
      'CERT-' + Math.random().toString(36).substring(2, 15).toUpperCase();
    doc.text(
      `Certificate ID: ${certificateID}`,
      105,
      190,
      null,
      null,
      'center'
    );

    doc.text('Signed by: Course Instructor', 105, 210, null, null, 'center');

    // If the user has earned a badge, add it to the certificate
    if (badge) {
      doc.setFontSize(14);
      doc.text(`Achievement: ${badge}`, 105, 230, null, null, 'center');
    }

    // Save the certificate PDF
    doc.save('certificate.pdf');
  };

  return (
    <section className='certificate-section'>
      <div className='certificate-header'>
        <h2>
          <FaCertificate className='icon certificate-icon' />
          Certification
        </h2>
        <p>Complete all modules and the final exam to earn your certificate!</p>
      </div>

      {isCertificateUnlocked ? (
        <div className='certificate-card'>
          <h3>Congratulations, {userName}!</h3>
          <p>
            You have successfully completed the course{' '}
            <strong>{courseName}</strong>.
          </p>
          <div className='certificate-footer'>
            <button className='download-btn' onClick={generateCertificatePDF}>
              Download Certificate
            </button>
          </div>
        </div>
      ) : (
        <div className='certificate-locked'>
          <p>
            You must complete all the modules and pass the final exam to unlock
            your certificate.
          </p>
          {badge && (
            <div className='badge'>
              <FaTrophy className='icon badge-icon' /> {badge}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default CertificationSection;
