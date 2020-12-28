import react from 'react'
import User from '../../components/User'

const authPage = (props) => (
    <div>
        <h1>The auth page of {props.appName}</h1>
        <User name="John" age="20" />
    </div>
)

authPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            resolve({appName: 'Super Auth App'})
        , 5000)
    })
    return promise;
}

export default authPage;