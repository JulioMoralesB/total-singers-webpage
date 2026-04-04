import {defineField, defineType} from 'sanity'
import {ColorSwatchInput} from '../components/ColorSwatchInput'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Miembro del Equipo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol / Registro Vocal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto de Perfil',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'instrument',
      title: 'Instrumento / Especialidad',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'color',
      title: 'Color Temático',
      type: 'string',
      components: {input: ColorSwatchInput},
      initialValue: '#ba9eff',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'Solo el usuario, sin @ (ej. totalsingers)',
        }),
        defineField({
          name: 'tiktok',
          title: 'TikTok',
          type: 'string',
          description: 'Solo el usuario, sin @ (ej. totalsingers)',
        }),
        defineField({
          name: 'facebook',
          title: 'Facebook',
          type: 'string',
          description: 'Solo el usuario (ej. totalsingers)',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'string',
          description: 'Solo el usuario, sin @ (ej. totalsingers)',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
