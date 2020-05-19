let days = ['Sunday', 'Monday', 'Tuesday']

const [minggu, senin, selasa] = days

console.log(minggu)

import React, {useState} from 'react'

// // Data
// state = {
//     text: ''
// }

// // fnUbahData
// this.setState({text:'Changed'})

let SearchBar = () => {

    const [text, setText] = useState('Kamis')

    return (
        <div>
            {/* Memunculkan alert text */}
            <button onClick={ () => { alert(text) }} >Munculkan text</button>
            {/* Mengubah isi text */}
            <button onClick={ () => { setText('Sudah diubah') }} >Mengubah text</button>
        </div>
    )
}

export default SearchBar
