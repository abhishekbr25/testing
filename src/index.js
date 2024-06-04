import 'dotenv/config'
import connectDB from './db/index.js';
import { app } from './app.js';


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('mongoo connection failed: ',err)
})
