import { useEffect } from "react";
import { useMatches } from "react-router-dom";
import { services } from "../../data/services";

function SEO() {
  const matches = useMatches();

  useEffect(() => {
    const currentMatch = [...matches]
      .reverse()
      .find(
        (match) =>
          match.handle?.meta || match.params?.slug
      );

    if (!currentMatch) {
      return;
    }

    let meta = currentMatch.handle?.meta;

    if (currentMatch.params?.slug) {
      const service = services.find(
        (item) => item.slug === currentMatch.params.slug
      );

      if (service) {
        meta = {
          title: `${service.title} | WerkProfi`,
          description: service.description,
        };
      }
    }

    if (!meta) {
      return;
    }

    document.title = meta.title;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");

      description.setAttribute(
        "name",
        "description"
      );

      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      meta.description
    );
  }, [matches]);

  return null;
}

export default SEO;