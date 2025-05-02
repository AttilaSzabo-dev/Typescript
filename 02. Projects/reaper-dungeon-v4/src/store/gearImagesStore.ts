const gearFolders = import.meta.glob("../assets/images/gear/*/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const normalizeId = (filename: string) => {
  const parts = filename.split("/");
  const name = parts[parts.length - 1].replace(".png", "");
  return name;
};

const categoryMap: Record<string, { id: string; image: string }[]> = {};

Object.entries(gearFolders).forEach(([path, image]) => {
  const parts = path.split("/");
  const category = parts[parts.length - 2]; // e.g., "belt"

  const name = normalizeId(path);

  const id = name
    .replace("common", "c")
    .replace("rare", "r")
    .replace("epic", "e")
    .replace("magic", "m")
    .replace("set", "s")
    .replace("legendary", "l")
    .replace("belt", "be")
    .replace("armor", "ar")
    .replace("bow", "bw")
    .replace("boots", "bo")
    .replace("glove", "gl")
    .replace("helmet", "he")
    .replace("pants", "pa")
    .replace("shield", "sh")
    .replace("sword", "sw");

  if (!categoryMap[category]) categoryMap[category] = [];

  categoryMap[category].push({
    id,
    image,
  });
});

export const gearImages = categoryMap;
