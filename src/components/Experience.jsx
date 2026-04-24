import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Data Engineer',
    company: 'Eficens Systems',
    location: 'Hyderabad, India',
    date: 'June 2023 – July 2024',
    accent: 'rgba(0, 229, 255, 0.22)',
    bullets: [
      'Built ETL pipelines with Apache Airflow to collect, normalize, and load millions of network logs into an AWS-based data lake using S3, Glue, and governed data workflows.',
      'Developed a SIEM platform using FastAPI and Django microservices with GraphQL APIs and Elasticsearch for real-time monitoring, retrieval, and security analytics.',
      'Supported anomaly detection workflows using One-Class SVM and Autoencoders, helping prioritize high-severity incidents and improve operational visibility.',
      'Worked with PostgreSQL and Cassandra to optimize data modeling and large-scale processing performance across distributed systems.',
    ],
  },
  {
    role: 'Data Engineer Intern',
    company: 'Eficens Systems',
    location: 'Hyderabad, India',
    date: 'Jan 2023 – June 2023',
    accent: 'rgba(125, 211, 252, 0.18)',
    bullets: [
      'Used SQL and Python to analyze and normalize high-volume network device logs, improving data consistency for downstream analytics and reporting.',
      'Built Python and Pandas transformation pipelines to convert raw log data into structured datasets for analytics and machine learning workflows.',
      'Contributed to ETL and analytics preparation using AWS Glue and Snowflake, supporting reusable datasets for modeling and internal reporting.',
      'Collaborated with engineering and product teams to explain data patterns, anomalies, and insights for data-driven decision-making.',
    ],
  },
  {
    role: 'Backend Engineer',
    company: 'Tata Systems',
    location: 'India',
    date: 'Aug 2022 – Dec 2022',
    accent: 'rgba(168, 85, 247, 0.18)',
    bullets: [
      'Built backend systems for AIDC asset tracking solutions deployed for Tata Systems.',
      'Developed APIs supporting barcode and RFID enterprise workflows.',
      'Designed backend logic for an Automated Reporting System.',
      'Maintained data consistency across distributed services.',
    ],
  },
  {
    role: 'Flutter Developer Intern',
    company: 'DGTLmart Technologies Private Limited',
    location: 'India',
    date: 'May 2020 – Aug 2020',
    accent: 'rgba(34, 197, 94, 0.18)',
    bullets: [
      'Contributed to the development of the Tree Campus English-learning app using Flutter, Firebase, and React.',
      'Built and enhanced frontend UI flows for interactive features such as games and live classes.',
      'Supported feature integration, testing, and app improvements to create a smoother learning experience.',
    ],
  }
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{
          maxWidth: '760px',
          margin: '0 auto 36px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.72)',
          fontSize: '1rem',
          lineHeight: '1.7',
        }}
      >
        Experience across backend engineering, data platforms, analytics systems, and application development.
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              transition: { type: 'spring', stiffness: 220, damping: 18 },
            }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '28px',
              padding: '30px',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
              border: `1px solid ${exp.accent}`,
              boxShadow: '0 12px 40px rgba(0,0,0,0.22)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-60px',
                right: '-40px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                background: exp.accent,
                filter: 'blur(60px)',
                opacity: 0.45,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '16px',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.7rem',
                    color: '#ffffff',
                    margin: '0 0 8px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {exp.role}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: '#22d3ee',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                  }}
                >
                  {exp.company}
                  <span style={{ color: 'rgba(255,255,255,0.58)', fontWeight: 500 }}>
                    {' '}
                    | {exp.location}
                  </span>
                </p>
              </div>

              <span
                style={{
                  color: 'rgba(255,255,255,0.64)',
                  fontSize: '0.98rem',
                  paddingTop: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                {exp.date}
              </span>
            </div>

            <ul
              style={{
                margin: 0,
                paddingLeft: '22px',
                color: 'rgba(255,255,255,0.78)',
                lineHeight: '1.85',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={{ marginBottom: '10px' }}>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}