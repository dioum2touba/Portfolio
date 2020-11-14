import React from 'react';

const ExperienceDetail = (props) => {
    return (
        <article
            className="timeline-entry animate-box"
            data-animate-effect={props.classEffet}
        >
            <div className="timeline-entry-inner">
                <div className={props.classColor}>
                <i className="icon-pen2"></i>
                </div>

                <div className="timeline-label">
                <h2>
                    <a href="#">{props.classLink}</a>{' '}
                    <span> {props.classYear} </span>
                    <div className="divFonction">
                        <h4>
                            <span className="fonction">Fonction:</span> {' '}
                            {props.fonction} 
                        </h4>
                    </div>
                </h2>
                <p>
                    <span className="fonction">Description:</span> {' '}
                    {props.content} 
                </p>
                </div>
            </div>
        </article>
    );
};

export default ExperienceDetail;