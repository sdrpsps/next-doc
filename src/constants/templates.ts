export const templates = [
  {
    id: "blank",
    name: "Blank Document",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/blank-document.svg",
    initialContent: "",
  },
  {
    id: "business-letter",
    name: "Business Letter",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/business-letter.svg",
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date: <strong>[Insert Date]</strong></p>
      <p>Recipient's Name</p>
      <p>Recipient's Position</p>
      <p>Company Name</p>
      <p>Address</p>
      <p>City, State, ZIP Code</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Introduction paragraph]</p>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Point</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Key Issue</td>
            <td>Description of the issue</td>
          </tr>
          <tr>
            <td>Proposed Solution</td>
            <td>Details of the solution</td>
          </tr>
        </tbody>
      </table>
      <p>[Closing remarks]</p>
      <p>Sincerely,</p>
      <p>Your Name</p>
    `,
  },
  {
    id: "cover-letter",
    name: "Cover Letter",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/cover-letter.svg",
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date: <strong>[Insert Date]</strong></p>
      <p>Recipient's Name</p>
      <p>Recipient's Position</p>
      <p>Company Name</p>
      <p>Dear [Recipient's Name],</p>
      <p>I am excited to apply for the <strong>[Position Name]</strong> position at <strong>[Company Name]</strong>.</p>
      <ul>
        <li><strong>Skill 1:</strong> Brief description of skill</li>
        <li><strong>Skill 2:</strong> Brief description of skill</li>
        <li><strong>Skill 3:</strong> Brief description of skill</li>
      </ul>
      <p>Thank you for considering my application.</p>
      <p>Sincerely,</p>
      <p>Your Name</p>
    `,
  },
  {
    id: "letter",
    name: "Letter",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/letter.svg",
    initialContent: `
      <p>Your Name</p>
      <p>Your Address</p>
      <p>City, State, ZIP Code</p>
      <p>Date: <strong>[Insert Date]</strong></p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <blockquote>
        <p>“Insert a relevant quote or reference if applicable.”</p>
      </blockquote>
      <p>Looking forward to your reply.</p>
      <p>Sincerely,</p>
      <p>Your Name</p>
    `,
  },
  {
    id: "project-proposal",
    name: "Project Proposal",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Project Title: <strong>[Project Name]</strong></h2>
      <p><strong>Prepared by:</strong> [Your Name]</p>
      <p><strong>Date:</strong> [Insert Date]</p>
      <h3>Key Objectives</h3>
      <ul>
        <li>Objective 1: [Description]</li>
        <li>Objective 2: [Description]</li>
      </ul>
      <h3>Timeline</h3>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Duration</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phase 1</td>
            <td>2 Weeks</td>
            <td>Initial Planning</td>
          </tr>
          <tr>
            <td>Phase 2</td>
            <td>4 Weeks</td>
            <td>Development</td>
          </tr>
        </tbody>
      </table>
      <h3>Budget</h3>
      <p><strong>Total Cost:</strong> [Insert Amount]</p>
    `,
  },
  {
    id: "resume",
    name: "Resume",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/resume.svg",
    initialContent: `
      <h1>Your Name</h1>
      <p><strong>Address:</strong> Your Address</p>
      <p><strong>Email:</strong> Your Email</p>
      <p><strong>Phone:</strong> Your Phone Number</p>
      <h2>Work Experience</h2>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company A</td>
            <td>Software Engineer</td>
            <td>2020 - Present</td>
          </tr>
          <tr>
            <td>Company B</td>
            <td>Intern</td>
            <td>2019 - 2020</td>
          </tr>
        </tbody>
      </table>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    `,
  },
  {
    id: "software-proposal",
    name: "Software Proposal",
    image:
      "https://raw.githubusercontent.com/gist/AntonioErdeljac/dd4ddba7133cdddc5acfd7a07772c786/raw/101828e5f69c44ec70af4a259c5bd91fbc3269c6/software-proposal.svg",
    initialContent: `
      <h1>Software Proposal</h1>
      <p><strong>Prepared for:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Name]</p>
      <p><strong>Date:</strong> [Insert Date]</p>
      <h2>Introduction</h2>
      <p>[Summary of the project]</p>
      <h3>Technology Stack</h3>
      <ul>
        <li>Frontend: React, Angular</li>
        <li>Backend: Node.js, Python</li>
        <li>Database: MySQL, MongoDB</li>
      </ul>
      <h3>Timeline</h3>
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Milestone</th>
            <th>Completion Date</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phase 1</td>
            <td>MM/DD/YYYY</td>
            <td>Requirement Gathering</td>
          </tr>
          <tr>
            <td>Phase 2</td>
            <td>MM/DD/YYYY</td>
            <td>Prototype Development</td>
          </tr>
        </tbody>
      </table>
      <h3>Budget</h3>
      <p>Total Cost: <strong>$[Insert Amount]</strong></p>
    `,
  },
];
