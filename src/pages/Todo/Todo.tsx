import {Helmet} from "react-helmet";

const Todo=() => {
    const title = 'Todo-App'
    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <div className={'row'}>Todo Application</div>
            </>
    )
}
export default  Todo;