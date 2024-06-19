import React from 'react';
import '../css/WorkHistory.css';

const workHistory = [
  {
    date: 'January 2024 - Present',
    title: 'Junior Business Analyst',
    company: 'UH - Clear Lake Campus Recreation and Wellness',
    responsibilities: [
      'Analyze and document business processes to identify areas for improvement and increased efficiency.',
      'Collaborate with cross-functional teams to develop and implement innovative solutions.',
      'Facilitate meetings and workshops to elicit requirements and validate solutions with stakeholders.',
      'Assist in project management tasks, including planning, monitoring, and reporting project progress.',
    ],
    className: 'job-1'
  },
  {
    date: 'September 2021 - December 2023',
    title: 'Graduate Assistant for Graphic Design and Marketing',
    company: 'UH - Clear Lake Campus Recreation and Wellness',
    responsibilities: [
      'Led and managed a team of five student staff, focusing on professional development.',
      'Oversaw scheduling and task delegation to ensure efficient workflow.',
      'Maintained and updated the department’s website.',
      'Contributed to strategic planning efforts for the department.',
      'Created clear and concise marketing materials using Adobe Illustrator.',
    ],
    className: 'job-2'
  },
  {
    date: 'September 2019 - August 2021',
    title: 'Program Assistant for Graphic Design and Marketing',
    company: 'UH - Clear Lake Campus Recreation and Wellness',
    responsibilities: [
      'Collaborated with the supervisor to delegate tasks within the marketing team.',
      'Produced flyers and promotional materials using Adobe Illustrator.',
      'Designed bi-fold brochures in Adobe InDesign.',
      'Delivered presentations and public speaking engagements to promote campus recreation.',
      'Supported event planning and execution on campus.',
    ],
    className: 'job-3'
  },
  {
    date: 'August 2018 - August 2019',
    title: 'Marketing Assistant',
    company: 'UH - Clear Lake Campus Recreation and Wellness',
    responsibilities: [
      'Managed social media platforms to increase engagement and reach.',
      'Designed and created graphics using Adobe Illustrator.',
      'Developed flyers and signage to promote events and initiatives.',
      'Assisted in organizing and staffing campus events, distributing information to attendees.',
    ],
    className: 'job-4'
  }
];

const WorkHistory = () => {
  return (
    <div className="work-history-container">
      <h2>Work History</h2>
      <div className="timeline">
        {workHistory.map((job, index) => (
          <div key={index} className={`timeline-item ${job.className}`}>
            <div className="timeline-date">{job.date}</div>
            <div className="timeline-content">
              <h3>{job.title}</h3>
              <h4>{job.company}</h4>
              <ul>
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
