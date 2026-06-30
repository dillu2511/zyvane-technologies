"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const categories = [
  {
    name: "Frontend",
    techs: ["React", "Next.js", "Vue", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
  },
  {
    name: "Backend",
    techs: ["Node.js", "Python", "Go", "Java", "GraphQL", "REST APIs", "gRPC"]
  },
  {
    name: "AI & ML",
    techs: ["TensorFlow", "PyTorch", "OpenAI", "LangChain", "Hugging Face", "Pinecone"]
  },
  {
    name: "Cloud & DevOps",
    techs: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
  },
  {
    name: "Database",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra", "DynamoDB"]
  },
  {
    name: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"]
  }
];

export function TechStack() {
  return (
    <section className="py-24 bg-popover/30 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Modern stack. <br />
            <span className="text-muted-foreground">Limitless capabilities.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We select the right tools for the job, favoring technologies with strong ecosystems, high performance, and proven enterprise scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl hover:border-brand-secondary/30 transition-colors"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-brand-secondary"></span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-muted hover:bg-muted/80 text-muted-foreground">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
