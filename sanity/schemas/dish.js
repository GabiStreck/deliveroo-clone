export default {
  title: 'Dish',
  name: 'dish',
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
      title: 'Price',
      name: 'price',
      type: 'number',

    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ]
}
