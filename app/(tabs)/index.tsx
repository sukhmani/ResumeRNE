import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';

const projects = [
  {
    name: 'AI Insight Generator',
    description:
      'Developed a Streamlit-based app using ChatGroq and TavilySearchResults to generate contextual business insights.',
    link: 'https://capstone-ai.streamlit.app/',
  },
  {
    name: 'Portfolio Website',
    description:
      'Created a React.js portfolio to highlight skills and projects, hosted on GitHub Pages.',
    link: 'https://sukhmani.github.io/ResumeReact/',
  },
];

export default function IndexPage() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView style={[styles.container, isDark && styles.containerDark]}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroName}>Sukhmani Thukral</Text>
        <Text style={styles.heroTagline}>Software Developer | Seattle, WA</Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.contact}>Email: thukralsukhmani@cityuniversity.edu</Text>
        <Text style={styles.contact}>Phone: (206) 225-8829 | (425) 894-3537</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sukhmani-thukral/')}>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sukhmani/ResumeReact')}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text>Masters in Computer Science – City University</Text>
        <Text>Bachelors in IT – Bellevue College (2021)</Text>
        <Text>Business Admin – University of Washington</Text>
        <Text>MBA – IPM Lucknow</Text>
      </View>

      {/* Overview */}
      <View style={styles.section}>
        <Text style={styles.heading}>Professional Overview</Text>
        <Text>
          Versatile developer with expertise in .NET, Salesforce, full-stack web, DevOps (Ansible, Jenkins), and cloud (Azure, AWS, GCP). Experienced with Power BI, data analytics, and cross-functional systems.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        <View style={styles.card}>
          <Text style={styles.jobTitle}>Azure Support Engineer – Mindtree (2022–2024)</Text>
          <Text>• Provided advanced support for AKS, ACR, and ACI</Text>
          <Text>• Used Kusto queries, ASC/ASI, and collaborated across teams</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.jobTitle}>Scribe/Proctor – Bellevue College (2017–2020)</Text>
          <Text>• Supported technical and academic delivery for MySQL, networking, and web development</Text>
        </View>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <Text>• Databases: MySQL, PostgreSQL, MongoDB, SQL Server</Text>
        <Text>• Frontend: HTML, CSS, JS, React, Angular</Text>
        <Text>• Backend: Node.js, Express, Python</Text>
        <Text>• DevOps: Jenkins, Docker, Kubernetes, Azure, AWS</Text>
        <Text>• Platforms: Red Hat, Windows, VMware, Bash, PowerShell</Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        <Text>• Microsoft Azure Certified</Text>
        <Text>• AWS Certified</Text>
        <Text>• Salesforce Certified Developer</Text>
        <Text>• Microsoft Technical Associate</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {projects.map((project, idx) => (
          <View key={idx} style={styles.card}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Text style={styles.description}>{project.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
              <Text style={styles.link}>View Project</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.heading}>Hobbies & Interests</Text>
        <Text>• Coding</Text>
        <Text>• Hiking</Text>
        <Text>• Reading</Text>
        <Text>• Traveling</Text>
      </View>
    </ScrollView>
  );
}

// For favicon and custom title (only for web builds), edit app/_document.tsx or inject meta into public/index.html during export.

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  containerDark: { backgroundColor: '#0f172a' },
  hero: {
    backgroundColor: '#1e293b',
    padding: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  heroName: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
  heroTagline: { fontSize: 16, color: '#cbd5e1', marginTop: 6 },
  section: { marginBottom: 25 },
  heading: { fontSize: 20, fontWeight: '600', marginBottom: 10, color: '#0f172a' },
  jobTitle: { fontSize: 16, fontWeight: '500', marginBottom: 6 },
  projectTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  description: { fontSize: 14, marginBottom: 6 },
  contact: { fontSize: 14 },
  link: { color: '#2563eb', textDecorationLine: 'underline', marginTop: 6 },
  card: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});
