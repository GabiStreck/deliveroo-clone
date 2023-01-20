export default {
  title: 'Sections',
  name: 'section',
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
      title: 'Restaurants',
      name: 'restaurants',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'restaurant' }
          ]
        }
      ]
    },
  ]
}
