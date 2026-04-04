import {defineArrayMember, defineField, defineType} from 'sanity'

export const showType = defineType({
  name: 'show',
  title: 'Evento / Recital',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Fecha',
      type: 'date',
      options: {dateFormat: 'YYYY-MM-DD'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Recinto / Sala',
      description: 'Nombre del recinto o sala (ej. Centro Cultural, Teatro Municipal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Ubicación / Auditorio',
      description: 'Nombre del auditorio o área específica (ej. Auditorio Principal)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen del Evento',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'setlist',
      title: 'Setlist',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'track',
          title: 'Canción',
          fields: [
            defineField({
              name: 'number',
              title: 'Número',
              type: 'number',
              validation: (Rule) => Rule.required().integer().positive(),
            }),
            defineField({
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'artist',
              title: 'Artista Original',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'duration',
              title: 'Duración',
              description: 'Formato mm:ss (ej. 3:45)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'soloists',
              title: 'Solistas',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'artist',
              number: 'number',
            },
            prepare({title, subtitle, number}) {
              return {
                title: `${number}. ${title}`,
                subtitle,
              }
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
})
