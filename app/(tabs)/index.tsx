import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const projects = [
  {
    name: 'AI Insight Generator',
    description:
      'Developed a Streamlit-based tool that utilizes ChatGroq and TavilySearchResults to generate business insights from company and product data.',
    link: 'https://capstone-ai.streamlit.app/',
  },
  {
    name: 'Portfolio Website',
    description:
      'Built a responsive personal portfolio using React.js and CSS to showcase projects, skills, and contact details.',
    link: 'https://sukhmani.github.io/ResumeReact/',
  },
];

export default function IndexPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('./Sukhmani.png')} style={styles.avatar} />
        <Text style={styles.name}>Sukhmani Thukral</Text>
        <Text style={styles.subtitle}>Software Developer | Seattle, WA</Text>
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
        <Text>Business Administration – University of Washington</Text>
        <Text>MBA – IPM Lucknow</Text>
      </View>

      {/* Professional Overview */}
      <View style={styles.section}>
        <Text style={styles.heading}>Professional Overview</Text>
        <Text>
          Extensive experience in .NET and Salesforce development, DevOps automation (Ansible, Jenkins), cloud platforms (AWS, Azure, GCP), and full-stack development using MERN, MEAN, and LAMP stacks. Skilled in data analytics with Power BI and DAX.
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        <Text style={styles.jobTitle}>Azure Support Engineer, Mindtree (2022–2024)</Text>
        <Text>• Delivered support for AKS, ACR, and other Azure resources</Text>
        <Text>• Utilized Kusto Queries, Copilot, and monitoring tools to troubleshoot issues</Text>

        <Text style={styles.jobTitle}>Scribe/Proctor/Note-Taker, Bellevue College (2017–2020)</Text>
        <Text>• Provided technical and academic support across multiple disciplines</Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <Text>Databases: MySQL, PostgreSQL, MongoDB, SQL Server</Text>
        <Text>Web: HTML, CSS, JavaScript, React, Angular, Node, Express</Text>
        <Text>Languages/Scripting: Python, Bash, PowerShell</Text>
        <Text>Cloud/DevOps: AWS, Azure, Docker, Kubernetes, Jenkins</Text>
        <Text>OS/Networking: Red Hat, Windows, DNS, TCP/IP, VMware</Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.heading}>Certifications</Text>
        <Text>Microsoft Azure Certified</Text>
        <Text>AWS Certified</Text>
        <Text>Salesforce Certified Developer</Text>
        <Text>Microsoft Technical Associate</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.heading}>Projects</Text>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <Text style={styles.projectTitle}>{project.name}</Text>
            <Text style={styles.description}>{project.description}</Text>
            <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
              <Text style={styles.link}>View Project</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.heading}>Hobbies & Interests</Text>
        <Text>Coding</Text>
        <Text>Hiking</Text>
        <Text>Reading</Text>
        <Text>Traveling</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  section: { marginBottom: 25 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 16, marginBottom: 5 },
  contact: { fontSize: 14, marginBottom: 2 },
  link: { color: '#2e78b7', textDecorationLine: 'underline', marginTop: 5 },
  heading: { fontSize: 20, fontWeight: '600', marginVertical: 10 },
  jobTitle: { fontSize: 16, fontWeight: '500', marginTop: 10 },
  projectCard: {
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  projectTitle: { fontSize: 16, fontWeight: '500' },
  description: { marginTop: 4, fontSize: 14 },
});
