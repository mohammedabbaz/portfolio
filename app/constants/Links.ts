import { Book, Contact, LucideIcon, MessageSquareTextIcon, User, Wrench } from "lucide-react"


type Link={
    name:string ,
    href:string,
    icon:LucideIcon,
}

export const navLinks:Link[] =[
    {name:'About' , href:'#about', icon:User},
    
    {name:'Skills' , href:'#skills', icon:Wrench},
    {name:'Portfolio' , href:'#portfolio', icon:Book},
    {name:'Contact' , href:'#contact', icon:MessageSquareTextIcon},
]