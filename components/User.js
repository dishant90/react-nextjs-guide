import react from 'react'

const user = (props) => (
    <div>
        <h2>User Details</h2>
        <p>{props.name}</p>
        <p>Age: {props.age}</p>
        <style jsx>{`
            div {
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
                text-align: center;
            }
        `}</style>
    </div>
)

export default user