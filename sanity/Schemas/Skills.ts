import {defineType, defineField, defineArrayMember} from 'sanity'

export const Skills = defineType({
  title: "Skills",
  name: "skills",
  type: "document",
  fields: [
    defineField({
      title: "Label",
      name: "label",
      type: "string",
     validation:(Role)=>[Role.required().min(3).max(100)]
     
    }),
    defineField({
        title: "Persontage",
        name: "value",
        type: "number",
       validation:(Role)=>[Role.required().min(1).max(100).error('min value must be 1 and max value must be 100')]
       
      }),
      defineField({
        title: "Category",
        name: "category",
        type: "string",
        initialValue:'frontEnd',
        options:{
            list:[
                {title:'Front End' , value:'frontEnd'},
                {title:'Tools' , value:'tools'},
                {title:'Back End' , value:'backEnd'},
            ]            
        }
        ,
        validation:(Rols)=>[Rols.required()]
   
       
      }),
  ]
})  