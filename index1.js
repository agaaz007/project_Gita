import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path"; 
const app=express();
const port=3000;
app.use(express.static(path.join('public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",async (req,res)=>{

//    const result=await axios.get("https://secrets-api.appbrewery.com/random")
//    console.log(result.data)
//    res.render("index.ejs",{ "secret": result.data.secret, "user": result.data.username });
// } catch(error)
// {
//     console.log(error.response.data);
//     res.status(500);
res.render("/Users/Agaaz/Downloads/bhagvad gita-html/indexg.ejs", { ch1_val: 0})
}
);

app.get("/ch1",async (req,res)=>{
    let config = {
        headers: {
           'X-RapidAPI-Key': '25a2db771bmsh3480ed9aa8fe1fap1573b5jsncc0bc220eff9',
           'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }
    try{
        const result=await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/',config);
        console.log(result.data.chapter_summary);
        const ch1_val = result.data.chapter_summary;
        console.log((ch1_val));
        res.render("/Users/Agaaz/Downloads/bhagvad gita-html/indexg.ejs", { ch1_val: result.data.chapter_summary})
    }
    catch(error)
    {
        console.log(error.response);
        res.status(500);
    }

})
app.get("/ch2",async (req,res)=>{
    let config = {
        headers: {
           'X-RapidAPI-Key': '25a2db771bmsh3480ed9aa8fe1fap1573b5jsncc0bc220eff9',
           'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }
    try{
        const result=await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/2/',config);
        console.log(result.data.chapter_summary);
        const ch1_val = result.data.chapter_summary;
        console.log((ch1_val));
        res.render("/Users/Agaaz/Downloads/bhagvad gita-html/indexg.ejs", { ch1_val: result.data.chapter_summary})
    }
    catch(error)
    {
        console.log(error.response);
        res.status(500);
    }

})
app.get("/ch3",async (req,res)=>{
    let config = {
        headers: {
           'X-RapidAPI-Key': '25a2db771bmsh3480ed9aa8fe1fap1573b5jsncc0bc220eff9',
           'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }
    try{
        const result=await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/3/',config);
        console.log(result.data.chapter_summary);
        const ch1_val = result.data.chapter_summary;
        console.log((ch1_val));
        res.render("/Users/Agaaz/Downloads/bhagvad gita-html/indexg.ejs", { ch1_val: result.data.chapter_summary})
    }
    catch(error)
    {
        console.log(error.response);
        res.status(500);
    }

})
app.get("/ch4",async (req,res)=>{
    let config = {
        headers: {
           'X-RapidAPI-Key': '25a2db771bmsh3480ed9aa8fe1fap1573b5jsncc0bc220eff9',
           'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
        }
    }
    try{
        const result=await axios.get('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/4/',config);
        console.log(result.data.chapter_summary);
        const ch1_val = result.data.chapter_summary;
        console.log((ch1_val));
        res.render("/Users/Agaaz/Downloads/bhagvad gita-html/indexg.ejs", { ch1_val: result.data.chapter_summary})
    }
    catch(error)
    {
        console.log(error.response);
        res.status(500);
    }

})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
