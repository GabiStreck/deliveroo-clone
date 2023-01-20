export default {
  title: 'Restaurant',
  name: 'restaurant',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Description',
      name: 'short_description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Pleace enter a value between 1 and 5")
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',

    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint'
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: "category" }]
    },
    {
      title: 'Dishes',
      name: 'dishes',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    },
  ]
}
