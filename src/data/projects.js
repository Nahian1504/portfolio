export const projects = [{
  slug: "cloud-saver-aws-optimizer",
  title: "Cloud-Saver: AWS Resource Optimizer with SAC",
  category: "Machine Learning",
  technologies: ["Python", "PyTorch", "Flask", "Docker", "AWS EC2"],
  summary: "An AI-driven reinforcement learning system that dynamically optimizes AWS EC2 costs.",
  problem: "AWS EC2 costs were hard to optimize dynamically, and standard tools left savings on the table.",
  role: "Designed and deployed the solution end-to-end.",
  approach: "Built a Soft Actor-Critic (reinforcement learning) model, wrapped it in a Flask API, Dockerized the deployment, and tested it on real and hybrid datasets.",
  outcome: "Achieved 25% higher cost savings than AWS's own Compute Optimizer, with zero penalties."
}, {
  slug: "ab-test-uplift-analyzer",
  title: "A/B Test Analyzer with Uplift Modeling",
  category: "Data Science",
  technologies: ["Python", "Scikit-learn", "Statistical Modeling"],
  summary: "An uplift-modeling framework that finds which subgroups actually benefit from a treatment, instead of relying on a flat average.",
  problem: "An A/B test showed a negative average treatment effect overall, which risked a bad launch decision.",
  role: "Built the uplift-modeling framework from scratch.",
  approach: "Implemented T-, S-, and X-Learners in Python to estimate individual treatment effects rather than one overall average.",
  outcome: "Found a subgroup with 37% uplift and projected $9.17M in annual net savings by recommending a targeted rollout instead of a full launch."
}, {
  slug: "bayesian-clinical-trial-analysis",
  title: "Bayesian Clinical Trial Analysis",
  category: "Statistics",
  technologies: ["R", "Bayesian Modeling"],
  summary: "A full-stack clinical trial analysis pipeline combining frequentist and Bayesian methods for FDA-style reporting.",
  problem: "Needed statistically rigorous, FDA-style trial analysis beyond standard frequentist methods alone.",
  role: "Built the full analysis pipeline.",
  approach: "Implemented preprocessing plus both frequentist and Bayesian modeling in R, including hierarchical modeling and prior sensitivity analysis.",
  outcome: "Delivered more efficient, probabilistic insight into trial results compared to traditional approaches."
}];