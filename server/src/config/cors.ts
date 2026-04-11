import { CorsOptions } from "cors"

// export const corsConfig: CorsOptions = {
//     origin: function (origin, callback) {
//         const whitelist = [process.env.FRONTEND_URL]

//         if(process.argv[2] == '--api'){
//             whitelist.push(undefined)
//         }

//         if (whitelist.includes(origin)) {
//             callback(null, true)
//         } else {
//             callback(new Error('Error de CORS'))
//         }
//     }
// } 


export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL]

        // En desarrollo, permitimos localhost
        if (process.env.NODE_ENV !== 'production') {
            whitelist.push('http://localhost:5173')
        }

        // 1. !origin permite herramientas como Postman o el flag --api
        // 2. whitelist.includes(origin) permite tu frontend
        if (!origin || whitelist.includes(origin)) {
            callback(null, true)
        } else {
            // Esto te ayudará a ver en los Logs de Render quién intenta entrar
            console.log("CORS rechazado desde el origen:", origin)
            callback(new Error('Error de CORS'))
        }
    }
}