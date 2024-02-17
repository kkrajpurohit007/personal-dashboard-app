import React from "react";
interface CustomCardProps {
    title: string,
    body: never,
    icon: never,
    progress?:number
    type?:string
}
const CustomCard = ({title, body, icon, progress, type='success'}:CustomCardProps) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={'text-xs font-weight-bold text-'+type+' text-uppercase mb-1'}>
                                {title}
                            </div>
                            { !progress &&  (<div className="h5 mb-0 font-weight-bold text-gray-800">
                                {body}
                            </div>) }
                            {progress && (
                                <div className="row no-gutters align-items-center">
                                    <div className="col-auto">
                                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            {progress}%
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="progress progress-sm mr-2">
                                            <div
                                                className="progress-bar bg-info"
                                                role="progressbar"
                                                style={{width: progress+"%"}}
                                                aria-valuenow={progress}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {icon &&
                            (<div className="col-auto"> {icon} </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CustomCard;