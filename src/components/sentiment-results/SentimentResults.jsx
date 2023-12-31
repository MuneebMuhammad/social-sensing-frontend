import { useEffect, useState } from "react";
import Card from "../card/Card";
import ChartComponent from "../chart/Chart";
import {
  CardsContainer,
  ChartsContainer,
  ResultsContainer,
} from "../dashboard/Dashboard.styles";
import SentimentsCard from "../sentiments-card/SentimentsCard";
import Papa from "papaparse";

export const SentimentResults = () => {
  const [sentimentResults, setSentimentResults] = useState();
  const [positiveResults, setPositiveResults] = useState();
  const [negativeResults, setNegativeResults] = useState();

  useEffect(() => {
    const csvFilePath = "./sentiment_results.csv";

    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      complete: (result) => {
        // console.log('CSV Data:', result.data);
        setSentimentResults(result.data);
        // console.log(sentimentResults);
      },
      error: (error) => {
        console.error("Error reading CSV file:", error.message);
      },
    });
    if (sentimentResults) {
      const positive = sentimentResults.find(
        (item) => item.Label === "positive"
      );
      setPositiveResults(positive.Score)
  
      const negative = sentimentResults.find(
        (item) => item.Label === "negative"
      );
      setNegativeResults(negative?.Score)
    }
  }, [sentimentResults]);

  const data1 = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Lahorecarshow",
        data: [
          15000, 10000, 25000, 20000, 30000, 20000, 35000, 25000, 40000, 30000,
          45000, 35000,
        ],
        fill: false,
        borderColor: "#6631F7",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#6631F7",
        pointBorderColor: "#6631F7",
      },
    ],
  };
  const data2 = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
    ],
    datasets: [
      {
        label: "Positive",
        data: [0, positiveResults/8, positiveResults/4, positiveResults/2, positiveResults],
        fill: false,
        borderColor: "#4FA531",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#4FA531",
        pointBorderColor: "#4FA531",
      },
      {
        label: "Negative",
        data: [0, negativeResults/8, negativeResults/4, negativeResults/2, negativeResults],
        fill: false,
        borderColor: "#E60000",
        tension: 0.1,
        pointRadius: 5,
        pointBackgroundColor: "#E60000",
        pointBorderColor: "#E60000",
      },
    ],
  };

  return (
    <ResultsContainer>
      <CardsContainer>
        <Card
          image={"/chat.svg"}
          title={"Total Results"}
          infoText={"348.7K"}
          percentage={"30%"}
        />
        <Card
          image={"/Impressions_likes.svg"}
          title={"Total Engagement"}
          infoText={"2.1K"}
          percentage={"30%"}
        />
        <SentimentsCard title={"Sentiments"} happy={"2.1K"} sad={"1.1K"} />
        <Card
          image={"/noun-antenna-4635475.svg"}
          title={"Reach"}
          infoText={"19.1M"}
          percentage={"30%"}
        />
      </CardsContainer>
      <ChartsContainer>
        <ChartComponent title={"Results over time"} data={data1} />
        <ChartComponent title={"Net sentiment over time"} data={data2} />
      </ChartsContainer>
    </ResultsContainer>
  );
};
