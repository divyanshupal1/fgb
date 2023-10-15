
import { MongoClient,ObjectId } from "mongodb";
import { connectToDB ,database } from "@/utils/database";

const id = new ObjectId("6529b0b8eda5fbd88b8aeb38")

async function extractData(year1,doc,range=false){
    var data = [];
    if(range){
        doc.forEach(element => {
            if(element.year>=Number(year1[0]) && element.year<=Number(year1[1])){
                data.push(element);
            }
        });
    }
    else{
        doc.forEach(element => {
            if(element.year == year1){
                data.push(element);
            }
        });
    }
    return data;
}

export async function GET(req,{ params }) {
    let body = params.year;
    await connectToDB();

    const Prices = database.collection("prices");

    const query = { _id: id };
    const doc = await Prices.findOne(query);

    var year = new Date().getFullYear();
    var consolelog = !body ? year : (body.length == 1 ? body[0] : `${body[0]} - ${body[1]}`) 
    console.log("searching prices for year: ",consolelog)

    if(!body){        
        return new Response(JSON.stringify(doc.pricedata),{status: 200});
    }
    if(body.length == 1){
        if(body[0] < 2003 || body[0] > year){
            return new Response("Invalid Year", {status: 400});
        }
        var data = await extractData(Number(body[0]),doc.pricedata);
        return new Response(JSON.stringify(data),{status: 200});
    }
    if(body.length == 2){
        if(body[0] < 2003 || body[0] > year || body[1] < 2003 || body[1] > year){
            return new Response("Invalid Year", {status: 400});
        }
        var data = await extractData(body,doc.pricedata,true);
        return new Response(JSON.stringify(data),{status: 200});
    }
    if(body.length > 2){
        return new Response("Invalid Year", {status: 400});
    }
}