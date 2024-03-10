import {defineType, defineField, defineArrayMember} from 'sanity'

export const Projects = defineType({
  title: "Projects",
  name: "projects",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
     validation:(Role)=>[Role.required(),Role.min(3).error("the title most be then 5 caracterse")]
     
    }),
    defineField({
        title: "Description",
        name: "description",
        type: "text",
       validation:(Role)=>[Role.required().min(10).max(1000).error('min value must be 10 and max value must be 1000')]
       
      }),
      defineField({
        title: "Images",
        name: "images",
        type: "array",
        of:[
            {type:"image"}
        ]
        ,
        validation:(Rols)=>[Rols.required()]
   
       
      }),
      defineField({
        title: "Tags",
        name: "tags",
        type: "array",
        of:[
            {type:"string"}
        ]
        ,
        validation:(Rols)=>[Rols.required()]
   
       
      }),
      defineField({
        title: "demoUrl",
        name: "demoUrl",
        type: "url"        ,
   
       
      }),
      defineField({
        title: "GitUrl",
        name: "GitUrl",
        type: "url"        ,
   
       
      }),
      defineField({
        title: "publishAt",
        name: "publishAt",
        type: "date"        ,
   
       
      }),
  ]
})  