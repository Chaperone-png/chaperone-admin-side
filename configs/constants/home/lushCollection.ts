import { Category } from "@/types/ReduxSliceType/categories";

const lushCollections = [
  {
    id: 1,
    title: "Monsoon Plants",
    backgroundColor: "#B0C5EB",
    redirectedTo: "/",
  },
  {
    id: 2,
    title: "Hanging Plants",
    backgroundColor: "#C9E67C",
    redirectedTo: "/",
  },
  {
    id: 3,
    title: "Flower Plants",
    backgroundColor: "#BBEDF4",
    redirectedTo: "/",
  },
  {
    id: 4,
    title: "Summer Plants",
    backgroundColor: "#FDDC6B",
    redirectedTo: "/",
  },
  {
    id: 5,
    title: "Air Purifying Plants",
    backgroundColor: "#EDEDEF",
    redirectedTo: "/",
  },
  {
    id: 6,
    title: "Outdoor Plants",
    backgroundColor: "#CCAFFF",
    redirectedTo: "/",
  },
  {
    id: 7,
    title: "Indoor Plants",
    backgroundColor: "#FEC5F0",
    redirectedTo: "/",
  },
  {
    id: 8,
    title: "Low Maintenance Plants",
    backgroundColor: "#B0C5EB",
    redirectedTo: "/",
  },
];

export const getCurrentLushCollectionCategories = (
  staticImageurl: string,
  plantSubcategories: Category[]
) => {
  const CategorySlug = plantSubcategories?.[0]?.parent_slug;
  return plantSubcategories?.[0]?.subcategories?.map((subcategory, index) => {
    return {
      id: subcategory.id,
      categoryTitle: subcategory.name,
      categoryBgColor: lushCollections[index].backgroundColor,
      categoryImage: `${staticImageurl}/category/${
        subcategory.slug.split("/")[1]
      }.svg`,
      redirectionUrl: `/collections/${CategorySlug}${subcategory.slug}`,
    };
  });
};
