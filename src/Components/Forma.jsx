import React, { useState } from "react";
import MyInput from "./MyInput";
import Dobavit from "./Dobavit";

const Forma = (props) => {
    const [img, setImg] = useState('')
    const [nazvanie, setNazvanie] = useState('')
    const [opisanie, setOpisanie] = useState('')
    const [silka, setSilka] = useState('')

    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            img,
            nazvanie,
            opisanie,
            silka
        }
        if (img && nazvanie && opisanie && silka) {
            props.onNewPost(newPost)
        }
    }

    return (
        <div className='formabs'>
            <form className='Formo4ka'>
                <MyInput className='Inputi' value={img} onChange={e => setImg(e.target.value)} type='text' placeholder='Ссылка на картинку' />
                <MyInput className='Inputi' value={nazvanie} onChange={e => setNazvanie(e.target.value)} type='text' placeholder='Название' />
                <MyInput className='Inputi' value={opisanie} onChange={e => setOpisanie(e.target.value)} type='text' placeholder='Описание' />
                <MyInput className='Inputi' value={silka} onChange={e => setSilka(e.target.value)} type='text' placeholder='Ссылка на трек' />
                <Dobavit className='Knopo4ka' onClick={addNewPost}>Добавить</Dobavit>
            </form>
        </div>
    )
}

export default Forma;