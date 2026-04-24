import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Development',
    subtitle: 'Core engineering stack',
    items: ['Python', 'Java', 'JavaScript', 'Node.js', 'FastAPI', 'Django', 'REST API', 'GraphQL'],
    accent: 'linear-gradient(135deg, rgba(0,229,255,0.22), rgba(0,153,255,0.18))',
    featured: true,
  },
  {
    title: 'AI / ML',
    subtitle: 'Modeling and intelligent systems',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'BERT', 'OpenCV', 'NLTK', 'YOLO', 'Deep Learning'],
    accent: 'linear-gradient(135deg, rgba(168,85,247,0.22), rgba(99,102,241,0.18))',
  },
  {
    title: 'LLMs & GenAI',
    subtitle: 'Modern GenAI workflows',
    items: ['OpenAI API', 'RAG', 'LangChain', 'Llama', 'Gemma', 'Pinecone', 'Prompt Engineering'],
    accent: 'linear-gradient(135deg, rgba(34,197,94,0.22), rgba(16,185,129,0.18))',
  },
  {
    title: 'Data Engineering',
    subtitle: 'Pipelines and data systems',
    items: ['Airflow', 'Apache Spark', 'Kafka', 'dbt', 'Snowflake', 'Databricks', 'Pandas', 'NumPy'],
    accent: 'linear-gradient(135deg, rgba(249,115,22,0.22), rgba(239,68,68,0.18))',
  },
  {
    title: 'Cloud & DevOps',
    subtitle: 'Deployment and infrastructure',
    items: ['AWS', 'Azure', 'GCP', 'Docker', 'CI/CD', 'GitHub Actions', 'BigQuery'],
    accent: 'linear-gradient(135deg, rgba(236,72,153,0.22), rgba(168,85,247,0.18))',
  },
  {
    title: 'Databases & BI',
    subtitle: 'Storage and analytics',
    items: ['PostgreSQL', 'MongoDB', 'Cassandra', 'Tableau', 'Power BI', 'Looker', 'Excel'],
    accent: 'linear-gradient(135deg, rgba(245,158,11,0.22), rgba(234,88,12,0.18))',
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Core Capabilities
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        style={{
          maxWidth: '760px',
          margin: '0 auto 32px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.72)',
          fontSize: '1rem',
          lineHeight: '1.7',
        }}
      >
        I work across software development, data engineering, analytics, and applied AI
        to build practical, scalable solutions.
      </motion.p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'stretch',
        }}
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 220, damping: 18 },
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              delay: index * 0.08,
              y: {
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px',
              padding: group.featured ? '30px' : '24px',
              minHeight: group.featured ? '320px' : '260px',
              background: group.accent,
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
              backdropFilter: 'blur(18px)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,15,30,0.72)',
                zIndex: 0,
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: '-40px',
                right: '-40px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.06)',
                filter: 'blur(10px)',
                zIndex: 0,
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3
                style={{
                  margin: '0 0 10px',
                  fontSize: group.featured ? '1.95rem' : '1.45rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.02em',
                }}
              >
                {group.title}
              </h3>

              <p
                style={{
                  margin: '0 0 22px',
                  color: 'rgba(255,255,255,0.74)',
                  fontSize: group.featured ? '1rem' : '0.95rem',
                  lineHeight: '1.6',
                }}
              >
                {group.subtitle}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      fontWeight: 500,
                      display: 'inline-block',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}