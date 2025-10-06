import {app} from './app.js';
const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//     console.log(`Server is working on http://localhost:${PORT}`);
// });

app.listen(process.env.PORT,()=>
{console.log("server is running on port 4000")}
) 