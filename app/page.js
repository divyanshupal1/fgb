"use client";

import { LoadingScreen } from "@/components/system/Loading/LoadingScreen";
import { useEffect, useState, useRef ,useReducer } from "react";
import {chartReducer} from "@/reducers/chartDataReducer";
// import { prices } from '@/sampledata/prices/data';
import { newsData } from "@/sampledata/news/data";

export default function Home() {


  // console.log(abc);
  const [prices,setPrices] = useState([]);

  const [statsData,setStatsData] = useState({"yearhigh":0,"yearlow":1000000,"fyearhigh":0,"fyearlow":1000000,"maxhigh":0,"maxlow":1000000});

  const [rangeState,setRangeState] = useState("YEAR");
  function updateRangeState(value){
    setRangeState(value);
  }

  const [chartState,chartDispatch] = useReducer(chartReducer,{data:[],type:""});  
  var statsLocal = {"yearhigh":0,"yearlow":1000000,"fyearhigh":0,"fyearlow":1000000,"maxhigh":0,"maxlow":1000000}

  useEffect(() => {
    var year = new Date().getFullYear();
    var prices;
    console.log("fetching prices.....");
    axios.get("/api/wool/prices").then((res)=>{
      console.log("fetced prices successfully.....");
      prices=res.data;
      setPrices(res.data);
      chartDispatch({type:"YEAR",payload:res.data});
      prices.forEach((item)=>{
        item.data.map((data)=>{
          if(data.month.split(" ")[1]==year){
            if(data.price>statsLocal.yearhigh){
              statsLocal.yearhigh = data.price;
            }
            if(data.price<statsLocal.yearlow){
              statsLocal.yearlow = data.price;
            }
          }
          if(data.month.split(" ")[1]<=year && data.month.split(" ")[1]>=year-5 ){
            if(data.price>statsLocal.fyearhigh){
              statsLocal.fyearhigh = data.price;
            }
            if(data.price<statsLocal.fyearlow){
              statsLocal.fyearlow = data.price;
            }
          }
          if(data.price>statsLocal.maxhigh){
            statsLocal.maxhigh = data.price;
          }
          if(data.price<statsLocal.maxlow){ 
            statsLocal.maxlow = data.price;
          }
        })
      })
      
      setStatsData(statsLocal);
    })
   
  }, []);

  useEffect(() => {
    chartDispatch({type:rangeState,payload:prices});
  }, [rangeState]);


  const chartcontainer = useRef(null);
  const [chartWidth, setChartWidth] = useState({ width: 0, height: 0 });

  let price = 1000;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (chartcontainer.current!=null) {
      setChartWidth({
        width: chartcontainer.current.getBoundingClientRect().width,
        height: chartcontainer.current.getBoundingClientRect().height,
      });
    }
      window.addEventListener("resize", () => {
        if (chartcontainer!=null) {
          setChartWidth((prev)=>{
          return {  width: chartcontainer.current?.getBoundingClientRect() ? chartcontainer.current?.getBoundingClientRect()?.width : prev.width,
                    height: chartcontainer.current?.getBoundingClientRect() ? chartcontainer.current?.getBoundingClientRect()?.height : prev.height,
                }
          });
        }
      });
      return () => {
        window.removeEventListener("resize", () => {});
      };

  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <main className="lg:h-[calc(100vh-60px)] min-h-[700px] lg:max-h-[1500px] sm:p-3">
      {loading && <LoadingScreen />}


      <div
        className="w-full h-full flex flex-col child:w-full max-w-[1920px] mx-auto
                 items-center justify-center sm:gap-y-3 sm:gap-x-3
                 lg:flex-row lg:child:h-[calc(100%-0px)]
                 transition-all  md:child:overflow-y-scroll child:overflow-x-hidden  "
      >
        <div className=" bg-light sm:rounded-md lg:first:w-2/5 p-4 md:p-6 scrollbar-custom scrollbar-track-hidden ">
            <h1 className="text-xl md:text-2xl font-bold mb-4">
              Wool Market Prices
            </h1>

            <div className="flex justify-between w-full mt-6 mb-6">
              <div>
                <span className="font-bold text-2xl md:text-3xl">
                  Rs. {price}
                </span>
                <span className="font-bold text-sm">/Quintal</span>
              </div>
              <div>
                <PriceRange updater={updateRangeState}/>
              </div>
            </div>

            <div className=" w-full h-[250px] sm:h-[340px] mt-5 relative" ref={chartcontainer}>
              {/* <TreeChart/> */}
              <Chart size={chartWidth} chartData={chartState} />
            </div>

            <div className="stats mt-4">
              <h3 className="text-xl md:text-2xl font-bold mb-3">Statistics</h3>
              <div className="w-full flex flex-col gap-y-2">
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">Highest this year</span>
                  <span className="font-bold">Rs. {statsData.yearhigh}</span>
                </div>
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">Lowest this year</span>
                  <span className="font-bold">Rs. {statsData.yearlow}</span>
                </div>
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">5 year high</span>
                  <span className="font-bold">Rs. {statsData.fyearhigh}</span>
                </div>
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">5 year low</span>
                  <span className="font-bold">Rs. {statsData.fyearlow}</span>
                </div>
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">Max High</span>
                  <span className="font-bold">Rs. {statsData.maxhigh}</span>
                </div>
                <div className="w-full flex justify-between rounded-md bg-primary-light p-2 px-4">
                  <span className="">Max Low</span>
                  <span className="font-bold">Rs. {statsData.maxlow}</span>
                </div>
              </div>
            </div>
        </div>

        <div className=" bg-light sm:rounded-md lg:last:w-3/5 scrollbar-custom">
          <div className="text-xl md:text-2xl rounded-md font-bold mb-4 sticky top-0 w-full backdrop-blur-md pt-4 pl-4 pr-4 md:pr-6 md:pl-6 md:pt-6">
              News & Trends
          </div>

          <div className="w-full flex flex-col pr-4 pl-4 pb-4 md:pr-6 md:pl-6 md:pb-6 ">

            {
              newsData.map((news,i)=>(<NewsCard key={i} item={news}/>))
            }
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
              <NewsCard/>
          </div>

        </div>
      </div>

    </main>
  );
}


export function NewsCard({item}){

  if(item?.content=="[Removed]" || item?.content==null){
    return null;
  }

  let date = new Date(item.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full ">

        <div className="w-full flex justify-between py-5 rounded-md max-sm:flex-col-reverse max-sm:gap-y-3 gap-x-4">

          <div className="news-content flex flex-col gap-y-3">
            <div className="w-fit bg-gray-200 px-3 py-1 rounded-full font-semibold">{date}</div>
            <div className="content">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.description }</p>                     
            </div>
            <a href={item.url}>
              <div className="continue  w-fit bg-secondary px-4 py-1 rounded-full font-semibold"> Continue Reading...</div>
            </a>
          </div>
          <div className="image rounded-md overflow-hidden w-full md:w-1/4 max-sm:h-[calc(100vh/4)] max-sm:min-h-[150px] drop-shadow-md  min-w-[300px]" style={{background:`url(${item.urlToImage})`,backgroundPosition:"center top",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
            {/* <img className="w-full h-full" alt="news-image" src={item.urlToImage}/> */}
          </div>

        </div>

        <div className="separator w-full flex gap-x-1  overflow-hidden">
          {
            Array(150).fill().map((_,i)=>(
              <div className="w-1 h-2 bg-gray-700 shrink-0" key={i}></div>
            ))
          }
        </div>
    </div>
  )
}



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// import Example from "@/components/charts/Line";
import Chart from "@/components/charts/Line";
import axios from "axios";
export function PriceRange({updater}) {
  return (
    <Select onValueChange={(value)=>updater(value)}>
      <SelectTrigger className="w-[130px] bg-primary-light font-bold">
        <SelectValue placeholder="Yearly" />
      </SelectTrigger>
      <SelectContent className="bg-primary-light font-bold">
        <SelectItem value="YEAR" className="rounded-md">
          Yearly
        </SelectItem>
        <SelectItem value="2YEAR" className="rounded-md">
          2 Year
        </SelectItem>
        <SelectItem value="5YEAR" className="rounded-md">
          5 Year
        </SelectItem>
        <SelectItem value="MAX" className="rounded-md">
          Max
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
