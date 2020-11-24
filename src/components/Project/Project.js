import React from "react";
import "./style.css";
import projectList from "./ProjectList"
import Card from "../Card/Card"

function Project() {
    return (
        <div className="container carousel-container">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="false">

                <div className="carousel-inner">
                    {
                        projectList.map((project, index) => {
                            if (project.active === "active") {
                                return (
                                    <div className="carousel-item active"
                                        data-interval="6000"
                                        key={index}>
                                        <Card
                                            title={project.name}
                                            description={project.description}
                                            src={project.image}
                                            alt={project.name}
                                            href={project.app}
                                            href2={project.github}
                                        />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="carousel-item"
                                        data-interval="6000"
                                        key={index}>
                                        <Card
                                            title={project.name}
                                            description={project.description}
                                            src={project.image}
                                            alt={project.name}
                                            href={project.app}
                                            href2={project.github}
                                        />
                                    </div>
                                )
                            }
                        })
                    }

                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Project;