import { Link } from "react-router";

export function Home() {
  return (
    <section>
      <h1>Nahian Tasnim</h1>
      <p>Computer science graduate student focused on machine learning, statistical modeling, and data analysis. 
        I turn complex data into decisions — from optimizing cloud costs with reinforcement learning to running uplift-modeled A/B tests.<p>
      </p>Target role: Data Scientist / Machine Learning Engineer.</p>
      <Link to="/projects">Explore my projects</Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>Education</h2>
      <p>M.S. Computer Science, Saint Louis University — GPA 3.97, expected Dec 2026</p>
      <p>B.S. Computer Science & Engineering, Brac University — GPA 3.83/4.0, Dean's List (x2), VC's List (x4)</p>

      <h2>Skills</h2>
      <ul>
        <li>Python (Pandas, NumPy, Scikit-learn, PyTorch)</li>
        <li>R & SQL (statistical modeling, data pipelines)</li>
        <li>Statistical Modeling & A/B Testing (uplift modeling, Bayesian analysis)</li>
        <li>Cloud & Tools (AWS/EC2, Docker, Git/GitHub)</li>
      </ul>

      <h2>Work Experience</h2>
      <article>
        <h3>Grader, Saint Louis University (current)</h3>
        <p>Grading assignments and exams, proctoring exams, helping the professor with lab sessions, and giving feedback that helps students in the course.</p>
      </article>
      <article>
        <h3>Virtual Data Analyst Intern/Associate, Excelerate (Feb–May 2025)</h3>
        <p>Led a multicultural team cleaning and analyzing large datasets, built the master/mapping tables in PostgreSQL, designed a live Looker Studio dashboard, and presented insights to stakeholders.</p>
      </article>
      <article>
        <h3>Undergraduate Teaching Assistant, Brac University (2023–2024)</h3>
        <p>Graded coursework, ran lab sessions, and held weekly consultation hours for fundamental CS courses.</p>
      </article>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>The best ways to reach me or see more of my work:</p>
      <ul>
        <li><a href="https://www.linkedin.com/in/nahian-tasnim-7235a121b">LinkedIn</a></li>
        <li><a href="https://github.com/Nahian1504">GitHub</a></li>
        <li><a href="mailto:nahian.tasnim@slu.edu">nahian.tasnim@slu.edu</a></li>
        <li><a href={`${import.meta.env.BASE_URL}resume.pdf`}>Download resume</a></li>
      </ul>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <Link to="/">Return home</Link>
    </section>
  );
}