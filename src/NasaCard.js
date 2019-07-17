import React from "react"

const NasaCard = ({ data }) => {
    const fetchContent = () => {
        if (data.media_type === "image") {
          return <img src={data.url} alt="test" width="350" height="300" />;
        } else if (data.media_type === "video") {
          return <iframe src={data.url} width="350" height="300" title="test"/>;
        }
    }


 return (
    <section className="nasa-card">
        <h2 className="title">{data.title}</h2>
        {fetchContent()}
        <p className="card-paragraph">
            Detail: {data.explanation}
        </p>
    </section>
    );
};

export default NasaCard;