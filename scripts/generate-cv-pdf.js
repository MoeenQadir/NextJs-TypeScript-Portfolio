const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

async function generatePDF() {
  const cvPath = path.join(__dirname, '..', 'public', 'assets', 'CV', 'CV-Advanced.md');
  const outputPath = path.join(__dirname, '..', 'public', 'assets', 'CV', 'Muhammad_Moeen_Ul_Qadir_CV.pdf');
  
  const markdown = fs.readFileSync(cvPath, 'utf-8');
  
  const htmlContent = marked.parse(markdown);
  
  const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Muhammad Moeen Ul Qadir - CV</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @page {
      margin: 20mm;
      size: A4;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #1f2937;
      background: white;
      font-size: 11pt;
    }
    
    .container {
      max-width: 100%;
      margin: 0 auto;
    }
    
    /* Header */
    header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 3px solid #0ea5e9;
    }
    
    .name {
      font-size: 2.5rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 0.25rem;
      letter-spacing: -0.02em;
    }
    
    .titles {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    
    .title-badge {
      background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
      color: white;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
      font-size: 0.85rem;
      color: #475569;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    
    .contact-item a {
      color: #0ea5e9;
      text-decoration: none;
    }
    
    .contact-item a:hover {
      text-decoration: underline;
    }
    
    .profile-photo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #0ea5e9;
      margin-bottom: 1rem;
      box-shadow: 0 4px 20px rgba(14, 165, 233, 0.3);
    }
    
    /* Sections */
    section {
      margin-bottom: 2rem;
    }
    
    h2 {
      font-size: 1.35rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e2e8f0;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1e293b;
      margin: 1rem 0 0.5rem;
    }
    
    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #334155;
      margin: 0.75rem 0 0.25rem;
    }
    
    p {
      margin-bottom: 0.75rem;
      color: #334155;
    }
    
    .summary-block {
      background: linear-gradient(135deg, #f0f9ff, #faf5ff);
      border-left: 4px solid #0ea5e9;
      padding: 1.25rem;
      border-radius: 0 8px 8px 0;
      margin-bottom: 1.5rem;
      font-style: italic;
      color: #334155;
    }
    
    /* Skills Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .skill-category {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1rem;
    }
    
    .skill-category-title {
      font-weight: 700;
      font-size: 0.9rem;
      color: #0f172a;
      margin-bottom: 0.75rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
    }
    
    .skill-tag {
      background: #e0f2fe;
      color: #0369a1;
      padding: 0.25rem 0.6rem;
      border-radius: 9999px;
      font-size: 0.7rem;
      font-weight: 500;
    }
    
    .skill-tag.backend { background: #fef3c7; color: #92400e; }
    .skill-tag.devops { background: #dcfce7; color: #166534; }
    .skill-tag.ai { background: #f3e8ff; color: #6b21a8; }
    .skill-tag.arch { background: #ffe4e6; color: #9d174d; }
    .skill-tag.tools { background: #fef9c3; color: #854d0e; }
    
    /* Experience */
    .experience-item {
      margin-bottom: 1.75rem;
      padding-left: 1.5rem;
      border-left: 3px solid #e2e8f0;
      position: relative;
    }
    
    .experience-item::before {
      content: '';
      position: absolute;
      left: -7px;
      top: 0;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #0ea5e9;
      border: 3px solid white;
      box-shadow: 0 0 0 2px #e2e8f0;
    }
    
    .experience-item.fastech::before { background: #0ea5e9; }
    .experience-item.augier::before { background: #f59e0b; }
    .experience-item.fastech2::before { background: #10b981; }
    .experience-item.bank::before { background: #a78bfa; }
    
    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }
    
    .job-title {
      font-size: 1.1rem;
      font-weight: 700;
      color: #0f172a;
    }
    
    .job-company {
      font-weight: 600;
      color: #0ea5e9;
    }
    
    .job-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.15rem;
      font-size: 0.8rem;
      color: #64748b;
      text-align: right;
    }
    
    .job-type {
      background: #e0f2fe;
      color: #0369a1;
      padding: 0.15rem 0.5rem;
      border-radius: 9999px;
      font-size: 0.65rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .job-type.contract { background: #fef3c7; color: #92400e; }
    
    .job-summary {
      color: #475569;
      font-size: 0.95rem;
      margin-bottom: 0.75rem;
    }
    
    .achievements {
      list-style: none;
    }
    
    .achievements li {
      position: relative;
      padding-left: 1.25rem;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      color: #334155;
    }
    
    .achievements li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: #0ea5e9;
      font-weight: bold;
    }
    
    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.35rem;
      margin-top: 0.75rem;
    }
    
    .tech-tag {
      background: #f1f5f9;
      color: #475569;
      padding: 0.2rem 0.55rem;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 500;
    }
    
    /* Education */
    .education-item {
      margin-bottom: 1.25rem;
    }
    
    .education-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 0.25rem;
    }
    
    .degree {
      font-weight: 700;
      color: #0f172a;
    }
    
    .institution {
      color: #0ea5e9;
      font-weight: 500;
    }
    
    .education-meta {
      font-size: 0.8rem;
      color: #64748b;
    }
    
    .thesis {
      font-style: italic;
      color: #475569;
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    
    /* Certifications */
    .cert-list {
      list-style: none;
    }
    
    .cert-list li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #f1f5f9;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .cert-list li:last-child {
      border-bottom: none;
    }
    
    .cert-name {
      font-weight: 500;
      color: #1e293b;
    }
    
    .cert-platform {
      color: #0ea5e9;
      font-size: 0.85rem;
    }
    
    .cert-year {
      color: #94a3b8;
      font-size: 0.8rem;
    }
    
    /* Projects Table */
    .projects-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.75rem;
      margin-top: 0.5rem;
    }
    
    .projects-table th,
    .projects-table td {
      padding: 0.5rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .projects-table th {
      background: #f8fafc;
      font-weight: 600;
      color: #334155;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }
    
    .projects-table tr:hover {
      background: #f8fafc;
    }
    
    .project-name {
      font-weight: 600;
      color: #0f172a;
    }
    
    .project-links a {
      color: #0ea5e9;
      text-decoration: none;
      margin-right: 0.5rem;
      font-size: 0.75rem;
    }
    
    .project-links a:hover {
      text-decoration: underline;
    }
    
    /* Stats */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      margin: 1.5rem 0;
    }
    
    .stat-card {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1.25rem;
      text-align: center;
    }
    
    .stat-value {
      font-size: 2rem;
      font-weight: 800;
      color: #0ea5e9;
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.75rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-top: 0.35rem;
    }
    
    /* Languages */
    .languages-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    
    .language-card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 1rem;
      text-align: center;
    }
    
    .language-name {
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 0.25rem;
    }
    
    .language-level {
      color: #0ea5e9;
      font-size: 0.85rem;
      font-weight: 500;
    }
    
    .language-flag {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    /* Footer */
    footer {
      margin-top: 3rem;
      padding-top: 1.5rem;
      border-top: 2px solid #e2e8f0;
      text-align: center;
      color: #94a3b8;
      font-size: 0.8rem;
    }
    
    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin: 1.5rem 0;
      flex-wrap: wrap;
    }
    
    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.65rem 1.25rem;
      border-radius: 8px;
      font-weight: 600;
      font-size: 0.85rem;
      text-decoration: none;
      transition: all 0.2s;
    }
    
    .cta-btn.primary {
      background: #0ea5e9;
      color: white;
    }
    
    .cta-btn.secondary {
      background: #f1f5f9;
      color: #0ea5e9;
      border: 1px solid #bae6fd;
    }
    
    .cta-btn.green {
      background: #10b981;
      color: white;
    }
    
    /* Print adjustments */
    @media print {
      .cta-buttons { display: none; }
      .profile-photo { width: 100px; height: 100px; }
    }
  </style>
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>
  `;
  
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setContent(fullHTML, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    }
  });
  
  await browser.close();
  console.log(`✅ PDF generated: ${outputPath}`);
}

generatePDF().catch(console.error);