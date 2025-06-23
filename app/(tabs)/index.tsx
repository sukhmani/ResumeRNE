import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function IndexPage() {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.section}>
        <Image source={require('./Sukhmani.png')} style={styles.avatar} />
        <Text style={styles.name}>Sukhmani Thukral</Text>
        <Text style={styles.subtitle}>Software Developer from Seattle, WA</Text>
        <Text style={styles.contact}>📧 thukralsukhmani@cityuniversity.edu</Text>
        <Text style={styles.contact}>📞 (206) 225-8829 | (425) 894-3537</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/sukhmani-thukral/')}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/sukhmani/ResumeReact')}>
          <Text style={styles.link}>🐙 GitHub</Text>
        </TouchableOpacity>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.heading}>🎓 Education</Text>
        <Text>Masters in Computer Science – City University</Text>
        <Text>Bachelors in IT – Bellevue College (2021)</Text>
        <Text>.NET Programming, Network Pro, Software Testing – Bellevue College</Text>
        <Text>Business Admin – University of Washington</Text>
        <Text>MBA – IPM Lucknow</Text>
      </View>

      {/* Professional Overview */}
      <View style={styles.section}>
        <Text style={styles.heading}>💼 Professional Overview</Text>
        <Text>
          I have extensive programming experience in .NET and Salesforce, complemented by strong DevOps skills including automation using Ansible and Jenkins...
          (you can truncate or paginate for mobile if too long)
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>📋 Work Experience</Text>
        <Text style={styles.jobTitle}>Azure Support Engineer – Mindtree (2022–2024)</Text>
        <Text>• Provided solutions related to AKS, ACR, ARO, and ACI issues</Text>
        <Text>• Used tools like ASC/ASI, ran Kusto queries, collaborated with teams</Text>
        {/* List truncated — feel free to add more bullet points as needed */}

        <Text style={styles.jobTitle}>Scribe/Proctor/Note-Taker – Bellevue College</Text>
        <Text>• Assisted in courses including Networking, Web Development, MySQL</Text>

        {/* Add others as <Text style={styles.jobTitle}>...</Text> followed by bullets */}
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>🛠️ Technical Skills</Text>
        <Text>• Databases: MySQL, PostgreSQL, MongoDB, SQL Server, Power BI...</Text>
        <Text>• Web: HTML, CSS, JavaScript, Node, Express, Angular, React</Text>
        <Text>• Scripting: Python, Bash, PowerShell</Text>
        <Text>• Cloud/DevOps: AWS, Azure, Docker, Kubernetes, Jenkins</Text>
        <Text>• Networking/OS: TCP/IP, DNS, Red Hat, Windows, Ubuntu, Mac</Text>
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.heading}>📜 Certifications</Text>
        <Text>• Microsoft Azure Certified</Text>
        <Text>• AWS Certified</Text>
        <Text>• Salesforce Certified Developer</Text>
        <Text>• Microsoft Technical Associate</Text>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.heading}>🚀 Projects</Text>
        <Text>🔹 AI Insight Generator – ChatGroq, Streamlit, TavilySearchResults</Text>
        <Text>🔹 Portfolio Website – React.js + CSS</Text>
      </View>

      {/* Hobbies */}
      <View style={styles.section}>
        <Text style={styles.heading}>🎯 Hobbies & Interests</Text>
        <Text>💻 Coding</Text>
        <Text>🥾 Hiking</Text>
        <Text>📚 Reading</Text>
        <Text>🌍 Traveling</Text>
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
  contact: { fontSize: 14 },
  link: { color: 'blue', textDecorationLine: 'underline', marginTop: 5 },
  heading: { fontSize: 20, fontWeight: '600', marginVertical: 10 },
  jobTitle: { fontSize: 16, fontWeight: '500', marginTop: 8 },
});
