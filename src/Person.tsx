import { useState } from "react";

interface Props {
    name: string;
    age: number;
    email: string;
    isMarried: boolean;
    country: Country;
    friends: string[]
}

export enum Country {
    Brazil= 'Brazil',
    France= 'France',
    Canada=' Canada'
}


const Person = (props: Props) => {
    const [email, setEmail] = useState<string>('')

    const handleChange =(eve:any)=>{
        setEmail(eve.target.value)
    }
  return (
    <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Email:{email}</p>
        <input type="email" onChange={handleChange}/>
        <p>Marital Status: {props.isMarried ? 'Married':'Unmarried'}</p>
        <p>Birth Place: {props.country}</p>
        Friends: {props.friends.map((friend)=><p>{friend}</p>)}
    </div>
  )
}

export default Person