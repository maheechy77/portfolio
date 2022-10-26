export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of skill",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "progress",
      title: "Progress",
      type: "text",
      description: "progress of the skill as Learning,Confident or Expert",
    },
  ],
};
