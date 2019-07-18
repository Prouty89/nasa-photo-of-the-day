import React from "react"

const NasaCard = ({ data }) => {
    const fetchContent = () => {
        if (data.media_type === "image") {
          return <img src={data.url} alt="test" width="515" height="330" />;
        } else if (data.media_type === "video") {
          return <iframe src={data.url} width="600" height="300" title="test"/>;
        }
    }


 return (
    <section className="nasa-card">
        <h4 className="date">{data.date}</h4>
        {fetchContent()}
        <h2 className="title">{data.title}</h2>
        <p className="card-paragraph">
            Detail: {data.explanation} 
        </p>
    </section>
    );
};

export default NasaCard;