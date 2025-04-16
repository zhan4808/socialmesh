import type { Student, MetricInfo } from "./types";

export const METRICS: MetricInfo = {
  gradYear: {
    label: "Graduation Year",
    description: "Earlier graduation = more senior student",
  },
  gpa: {
    label: "GPA",
    description: "Higher GPA = better academic performance",
  },
  internships: {
    label: "Internships",
    description: "More internships = more industry experience",
  },
  projects: {
    label: "Projects",
    description: "More projects = more applied experience",
  },
  leetcodeProblems: {
    label: "LeetCode Problems",
    description: "More LeetCode problems = better prepared for interviews",
  },
  githubContributions: {
    label: "GitHub Contributions",
    description: "More GitHub contributions = more active in open source",
  },
};

const generateRandomAvatar = (): string => {
  const randomId = Math.floor(Math.random() * 1000);
  return `https://avatars.githubusercontent.com/u/${randomId}?v=4`;
};

export const calculateStudentScore = (student: Omit<Student, "score">): number => {
  // Simple algorithm that weights different metrics
  return (
    (4.0 - Math.abs(student.gpa - 4.0)) * 25 +
    student.internships * 15 +
    student.projects * 10 +
    student.leetcodeProblems * 0.05 +
    student.githubContributions * 0.01
  );
};

export const MOCK_STUDENTS: Student[] = [
  {
    id: "1",
    name: "Alex Johnson",
    major: "Computer Science",
    gradYear: 2025,
    gpa: 3.9,
    internships: 3,
    projects: 8,
    leetcodeProblems: 450,
    githubContributions: 820,
    score: 0, // Will be calculated
    avatarUrl: generateRandomAvatar(),
  },
  {
    id: "2",
    name: "Jamie Smith",
    major: "CS + Math",
    gradYear: 2024,
    gpa: 4.0,
    internships: 2,
    projects: 5,
    leetcodeProblems: 650,
    githubContributions: 340,
    score: 0,
    avatarUrl: generateRandomAvatar(),
  },
  {
    id: "3",
    name: "Taylor Wilson",
    major: "Computer Science",
    gradYear: 2026,
    gpa: 3.7,
    internships: 1,
    projects: 12,
    leetcodeProblems: 250,
    githubContributions: 1200,
    score: 0,
    avatarUrl: generateRandomAvatar(),
  },
  {
    id: "4",
    name: "Jordan Lee",
    major: "CS + Statistics",
    gradYear: 2025,
    gpa: 3.5,
    internships: 2,
    projects: 7,
    leetcodeProblems: 500,
    githubContributions: 300,
    score: 0,
    avatarUrl: generateRandomAvatar(),
  },
  {
    id: "5",
    name: "Riley Garcia",
    major: "CS + Linguistics",
    gradYear: 2024,
    gpa: 3.8,
    internships: 4,
    projects: 10,
    leetcodeProblems: 350,
    githubContributions: 500,
    score: 0,
    avatarUrl: generateRandomAvatar(),
  },
  {
    id: "6",
    name: "Morgan Davis",
    major: "Computer Engineering",
    gradYear: 2026,
    gpa: 3.6,
    internships: 1,
    projects: 4,
    leetcodeProblems: 300,
    githubContributions: 250,
    score: 0,
    avatarUrl: generateRandomAvatar(),
  },
];

// Calculate and assign scores to mock students
export const students: Student[] = MOCK_STUDENTS.map((student) => ({
  ...student,
  score: calculateStudentScore(student),
})).sort((a, b) => b.score - a.score);

export const getRandomStudents = (count = 2): Student[] => {
  const shuffled = [...students].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
