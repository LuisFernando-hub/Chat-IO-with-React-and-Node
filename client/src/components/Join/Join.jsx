import { useRef } from "react";
import io from 'socket.io-client';
import style from './Join.module.css'
import {Input, Button} from '@mui/material'

export default function Join({ setChatVisibility, setSocket}) {

    const usernameRef = useRef();

    const handleSubmit = async () => {
        const username = usernameRef.current.value
        if (!username.trim()) return
        
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket);
        setChatVisibility(true)
    }

    return (
        <div className={style['join-container']}>
            <h1>Join</h1>
            <Input type="text" inputRef={usernameRef} placeholder="Nome de usuário" />
            <Button sx={{mt:2}} variant="contained" onClick={() => handleSubmit()}>Entrar</Button>
        </div>
    )
}
