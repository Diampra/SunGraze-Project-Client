import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { getProjectBySlug } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const farmlandSections = {
  "farm-land": {
    title: "Farm Land",
    content:
      "The Sungraze farmland is mainly built for land cultivation and producing variety of crops in one common place. Sungraze implements innovative strategies to promote conscious food choices.",
  },
  "club-house": {
    title: "Club House",
    content:
      "The Club at SUNGRAZE Farms is spread over 6 acres and perfectly blended with nature. It becomes a preferred spot for mega events and leisure.",
  },
  "naturopathy": {
    title: "Naturopathy",
    content:
      "Prakruthi Arogya Dhama is spread over 5 acres to promote physical, mental and spiritual well-being through natural therapies.",
  },
  "spiritual-retreat": {
    title: "Spiritual Retreat",
    content:
      "In modern Yoga, a retreat is a recreational holiday where daily stress is left behind to reconnect through meditation and asanas.",
  },
};

const ProjectSectionDetail = () => {
  const { slug, section } = useParams<{
    slug: string;
    section: string;
  }>();

  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project || project.type !== "farmland") {
    return <Navigate to="/projects" replace />;
  }

  const sectionData =
    section && farmlandSections[section as keyof typeof farmlandSections];

  if (!sectionData) {
    return <Navigate to={`/projects/${slug}`} replace />;
  }

  return (
    <Layout>
      <section className="py-20 container max-w-4xl">

        <Link to={`/projects/${slug}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Project
          </Button>
        </Link>

        <h1 className="text-4xl font-semibold mb-6">
          {sectionData.title}
        </h1>

        <p className="text-muted-foreground leading-relaxed">
          {sectionData.content}
        </p>

      </section>
    </Layout>
  );
};

export default ProjectSectionDetail;
