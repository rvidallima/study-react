export default function Fetch() {

    //mock
    const url = 'https://viacep.com.br/ws/04140080/json/'
    let localidade = ''
    fetch(url)
    .then(res => {
        if(!res.ok) {
            throw new Error('Deu ruim isso aqui: ' + res.status);           
        }
        return res.json()
    })
    .then(data => {
        localidade = data.localidade
        console.log('Dados recebidos:', data)
    })
    .catch(err => {
        console.log('Erro:', err)
    })

    return (
        <h1>Fetch {localidade}</h1>
    )
}
