import React from 'react'
import ReactDom from 'react-dom'

function Cartoon(props) {
    return <h1>THis is Component {props.name} and {props.last_name}</h1>
}

// class Cartoons extends React.Component{
//     render(){
//         return <h1>HEllo {this.props.name}</h1>
//     }
// }

class New extends React.Component{
    render()
    {
        return <section>
            <Cartoon name='Yamin' last_name='Sarker'/>
            <Cartoon name='aladin' last_name='khan' />
        </section>
    }

}

function Show() {

    return <section>
    <Cartoon name='Yamin' last_name='Sarker'/>
        <Cartoon name='aladin' last_name='khan' />
    </section>
}

    ReactDom.render(
      <New />,
        document.getElementById('root')
    );
