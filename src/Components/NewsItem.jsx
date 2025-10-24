import image from '../assets/newsimg.jpg';

export default function ({index,title,url,imgsrc,description}) {

    return (
        <div className="card  col-md-4 col-xl-3 m-2 my-3 p-2 shadow" key={index} >
            <img src={imgsrc ? imgsrc : image } alt="Loading..." className="card-img-top"  />
            <div className="card-body d-flex flex-column ">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description ? description.slice(0,90)+"..." :"Real-time coverage of breaking news, events, and trends across categories like politics, sports, entertainment, and tech."}</p>
                <div className="mt-auto text-center">
                    <a href={url} className="btn btn-primary">Read more</a>
                </div>
                
            </div>
        </div>
    );
}