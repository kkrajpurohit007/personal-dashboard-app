import './breadcrumb.css'
const Breadcrumb =({title}) => {
    return (
        <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {/*<li className="breadcrumb-item"><a href="#">Home</a></li>*/}
                    {/*<li className="breadcrumb-item"><a href="#">Library</a></li>*/}
                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                </ol>
            </nav>
        </div>
    )
}
export default Breadcrumb;