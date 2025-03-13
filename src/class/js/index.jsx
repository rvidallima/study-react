export default function Js( {fullName, age} ) {
    
    let brand = {
        name: 'Suporte',
        founded: 2023,
        city: 'São Paulo'
    }

    const { name } = brand
    const { founded } = brand
    const { city } = brand
    
    return (
        //<h1>nome completo: {props.fullName} idade: {props.age} empresa: {brand.name} fundada: {brand.founded} cidade: {brand.city}</h1>gi
        <h1>nome completo: {fullName} idade: {age} empresa: {name} fundada: {founded} cidade: {city}</h1>
    )
}
