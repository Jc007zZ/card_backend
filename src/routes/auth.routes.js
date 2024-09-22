const { Router } = require("express")
const authRoutes = Router()
require('dotenv').config();

authRoutes.get('/', (res, req) => req.send('oiii'))

// authRoutes.get('/login', (req, res) => { 
//     console.log('recebi'); 
//     const authUrl = `https://discord.com/oauth2/authorize?client_id=1081604584272830494&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fcallback&scope=identify`;
//     res.redirect(authUrl);
//   });
  
// authRoutes.get('/callback', (req, res) => getToken(req, res));
  
  
//   async function getToken(req, res) {
//     const code = req.query.code;
//     console.log(code)
  
//         const data = new URLSearchParams({
//           'grant_type': 'authorization_code',
//           'code': code ,
//           'redirect_uri': process.env.REDIRECT_URI
//         });
  
//         const headers = {
//           'Content-Type': 'application/x-www-form-urlencoded',
//           'Authorization': 'Basic ' + btoa(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)
//         };
  
//         try {
//           console.log(`${process.env.API_ENDPOINT}/oauth2/token`)
//           const response = await fetch(`${process.env.API_ENDPOINT}/oauth2/token`, {
//             method: 'POST',
//             headers: headers,
//             body: data
//           });
  
//           if (!response.ok) {
//             res.status(500).send('Erro ao processar a autenticação');
//             throw new Error(`Erro na requisição: ${response.statusText}`);
  
//           }
  
  
//           const result = await response.json();
//           console.log(result)
//           res.redirect("https://cobalt-tan-delta.vercel.app/");
//           return result;
//         } catch (error) {
//           console.error('Erro:', error);
//           throw error;
//         }
//   }
  
 module.exports = authRoutes