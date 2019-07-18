import React from "react"

const NasaCard = ({ data }) => {
    const fetchContent = () => {
        if (data.media_type === "image") {
          return <img src={data.url} alt="test" width="415" height="300" border-radius="50%"/>;
        } else if (data.media_type === "video") {
          return <iframe src={data.url} width="600" height="300" title="test"/>;
        }
    }


 return (
    <section className="nasa-card">
        <p className ="card-img">{fetchContent()}</p>
        <h4 className="date">{data.date}</h4>
        <h2 className="apod-title">{data.title}</h2>
        <p className="card-paragraph">
            Detail: {data.explanation} 
        </p>
    </section>
    );
};

export default NasaCard;