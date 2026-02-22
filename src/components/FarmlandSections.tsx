import { Link } from "react-router-dom";

interface Props {
  projectSlug: string;
}

export default function FarmlandSections({ projectSlug }: Props) {
  const sections = [
    {
      slug: "farm-land",
      title: "FARM LAND",
      description:
        "The Sungraze farmland is mainly built for land cultivation and producing variety of crops in one common place. Sungraze implements innovative strategies to promote conscious food choices.",
      image: "/farmland.jpg",
    },
    {
      slug: "club-house",
      title: "CLUB HOUSE",
      description:
        "The Club at SUNGRAZE Farms is spread over 6 acres and perfectly blended with nature. It is a preferred spot for mega events and leisure activities.",
      image: "/clubhouse.jpg",
    },
    {
      slug: "naturopathy",
      title: "NATUROPATHY",
      description:
        "Prakruthi Arogya Dhama is spread over 5 acres of land to cater to health promotion and holistic well-being of the individual.",
      image: "/naturopathy.jpg",
    },
    {
      slug: "spiritual-retreat",
      title: "SPIRITUAL RE-TREAT",
      description:
        "In modern Yoga, a retreat is a recreational holiday where daily stress is left behind. It helps reconnect through meditation and asanas.",
      image: "/spiritual.jpg",
    },
  ];

  return (
    <section className="py-20 border-t">
      <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {sections.map((section) => (
          <div key={section.slug} className="flex flex-col">
            
            {/* IMAGE */}
            <img
              src={section.image}
              alt={section.title}
              className="h-40 w-full object-cover rounded-lg mb-6"
            />

            {/* TITLE */}
            <h3 className="text-lg font-semibold mb-4">
              {section.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-muted-foreground mb-6">
              {section.description}
            </p>

            {/* BUTTON */}
            <Link
              to={`/projects/${projectSlug}/${section.slug}`}
              className="inline-block text-white px-4 py-2 text-sm rounded transition w-fit"
            >
              Read More
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}
