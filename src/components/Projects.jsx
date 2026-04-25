import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'LLM Guardrail for Hallucination Detection',
    tech: ['Python', 'PyTorch', 'Llama', 'Gemma', 'OpenAI', 'RAG', 'Pinecone'],
    desc: 'Built a multi-layer LLM guardrail framework to detect hallucinations using semantic similarity, contradiction checks, and benchmark-driven evaluation on TruthfulQA and adversarial inputs.',
    accent: 'rgba(0, 229, 255, 0.20)',
  },
  {
    title: 'Text-to-Speech using Generative AI',
    tech: ['Python', 'PyTorch', 'Tacotron2', 'HiFiGAN', 'Hugging Face'],
    desc: 'Built and fine-tuned a generative text-to-speech pipeline for emotional and style-conditioned speech generation, using structured evaluation metrics to improve model quality and detect regressions.',
    accent: 'rgba(244, 114, 182, 0.20)',
  },
  {
    title: 'Self-Driving Perception System',
    tech: ['PyTorch', 'YOLOv5', 'Pix2Pix GAN', 'OpenCV'],
    desc: 'Built an autonomous driving perception pipeline combining real-time object detection, adverse-weather image enhancement, lane detection, and object tracking to improve scene understanding in challenging conditions.',
    accent: 'rgba(59, 130, 246, 0.20)',
  },
  {
    title: 'Job Scam Detection using NLP',
    tech: ['Python', 'BERT', 'XGBoost', 'Scikit-learn', 'SHAP', 'MLflow'],
    desc: 'Built and compared NLP classifiers for fraudulent job posting detection, achieving strong accuracy while using SHAP and experiment tracking to improve explainability and robustness.',
    accent: 'rgba(34, 197, 94, 0.20)',
  },
  {
    title: 'Agentic AI E-Commerce Assistant',
    tech: ['Python', 'FastAPI', 'OpenAI', 'Hugging Face', 'APIs'],
    desc: 'Designed a multi-agent recommendation system for product search, price comparison, review analysis, and personalized suggestions using real-time inventory and pricing data.',
    accent: 'rgba(168, 85, 247, 0.20)',
  },
  {
    title: 'Disease Prediction & Recommendation System',
    tech: ['Python', 'Scikit-learn', 'FastAPI', 'Geolocation APIs'],
    desc: 'Developed a machine learning system to predict diseases from user-reported symptoms and recommend nearby physicians based on predicted condition and severity.',
    accent: 'rgba(249, 115, 22, 0.20)',
  },
  {
    title: 'AWS Data Lake: Job Market Insights',
    tech: ['AWS', 'S3', 'Glue', 'Lake Formation', 'Athena', 'Redshift', 'PySpark', 'dbt'],
    desc: 'Built an AWS-based data lake with ETL and ELT pipelines for job market analytics, then created forecasting models and dashboards to surface hiring and skills trends.',
    accent: 'rgba(236, 72, 153, 0.20)',
  },
  {
    title: 'Real-Time Stock Data ETL Pipeline',
    tech: ['Python', 'Airflow', 'Snowflake', 'dbt', 'Docker', 'Superset'],
    desc: 'Created an automated ELT pipeline to ingest stock market data, transform it into analytical tables, and visualize near real-time trends through dashboarding workflows.',
    accent: 'rgba(245, 158, 11, 0.20)',
  },
  {
    title: 'Real-Time Event Booking System',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'Redis', 'AWS'],
    desc: 'Built a full-stack booking platform with transactional seat reservation, JWT-based authentication, role-based access control, Redis caching, and AWS deployment for production reliability.',
    accent: 'rgba(14, 165, 233, 0.20)',
  },
  {
    title: 'Full-Stack Fitness Tracking Platform',
    tech: ['React', 'FastAPI', 'PostgreSQL', 'AWS'],
    desc: 'Developed a responsive fitness tracking platform with backend APIs, scalable data models, performance analytics, and optimized SQL queries for growing user activity data.',
    accent: 'rgba(16, 185, 129, 0.20)',
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{
          maxWidth: '780px',
          margin: '0 auto 36px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.72)',
          fontSize: '1rem',
          lineHeight: '1.7',
        }}
      >
        A selection of projects across applied AI, data engineering, machine learning,
        and analytics systems.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.01,
              transition: { type: 'spring', stiffness: 220, damping: 18 },
            }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '26px',
              padding: '26px',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '320px',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              border: `1px solid ${project.accent}`,
              boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-50px',
                right: '-30px',
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                background: project.accent,
                filter: 'blur(55px)',
                opacity: 0.5,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <h3
                style={{
                  fontSize: '1.3rem',
                  margin: '0 0 14px',
                  color: '#fff',
                  lineHeight: '1.35',
                }}
              >
                {project.title}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginBottom: '16px',
                }}
              >
                {project.tech.map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: '7px 12px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: '#dbeafe',
                      fontSize: '0.82rem',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p
                style={{
                  color: 'rgba(255,255,255,0.76)',
                  lineHeight: '1.7',
                  flexGrow: 1,
                  marginBottom: '0',
                }}
              >
                {project.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}