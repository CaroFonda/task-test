import Head from 'next/head'
import Navigation from "./Navigation"

const Container = (props) => (
    <div>
        <Head>
            <title>Task Manager</title>
        </Head>
        <Navigation />
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Container;