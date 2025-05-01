const skillFolders = import.meta.glob("../assets/images/skill/*/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalizeId = (filename: string) => {
  const parts = filename.split("/");
  const file = parts[parts.length - 1].replace(".png", ""); // e.g., "red_3"
  const category = parts[parts.length - 2]; // e.g., "offense"

  const prefix = category.slice(0, 2); // of, de, ma
  const level = file.split("_")[1]; // "3"

  return {
    id: `${prefix}${level}`,
    category,
  };
};

const categoryMap: Record<string, { id: string; image: string }[]> = {};

Object.entries(skillFolders).forEach(([path, image]) => {
  const { id, category } = normalizeId(path);

  if (!categoryMap[category]) categoryMap[category] = [];

  categoryMap[category].push({
    id,
    image,
  });
});

// Export individual categories and all together
export const offenseImages = categoryMap.offense ?? [];
export const defenseImages = categoryMap.defense ?? [];
export const magicImages = categoryMap.magic ?? [];

export const skillImages = categoryMap;
