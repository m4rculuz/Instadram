import React, { useContext, useState, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

//DEFINIAMO IL CONTEXT
export const SessionContext = React.createContext({})

//FUNZIONE CHE RITORNA I DATI DEL CONTEXT
export function useSessionContext() {
    return useContext(SessionContext)
}

//CONTEXT DEFINITIVO
function SessionProvider({ children }) {

    const [session, setSession] = useState()
    const [loading, setLoading] = useState(true)

    const posts = [{
        name: 'waifuMiia',
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/035_Uganda_kobs_mating_at_Queen_Elizabeth_National_Park_Photo_by_Giles_Laurent.jpg/1200px-035_Uganda_kobs_mating_at_Queen_Elizabeth_National_Park_Photo_by_Giles_Laurent.jpg?20231029182254",
        description: 'la descrizione arriva dalla pagina'
    },
    {
        name: 'Tartarughe',
        image: "https://www.notizieanimali.com/wp-content/uploads/2021/06/accoppiamento-tartarughe.jpg",
        description: 'stanno scopando!1!!1!'
    }
        
    ]

    useEffect(() => {
        loadSession()
    }, [])

    async function loadSession() {
        const savedSession = await AsyncStorage.getItem('@user_session')
        if (savedSession) {
            setSession(JSON.parse(savedSession))
        }
        setLoading(false)
    }

    async function logout() {
        await AsyncStorage.removeItem('@user_session')
        setSession(null)
    }

    async function login(newSession) {
        await AsyncStorage.setItem('@user_session', JSON.stringify( newSession ))
        setSession(newSession)
    }

    const data = {
        session: session,
        login: login,
        logout: logout,
        loading: loading,
        posts: posts
    }
    return (
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider