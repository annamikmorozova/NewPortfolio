import React from 'react';
import './styles.sass';

export default class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        links: [{
          text: 'About me',
          link: '/',
          icon: 'fa-pencil-square-o'
        }, {
          text: 'Projects',
          link: '/projects',
          icon: '#'
        }, {
          text: 'Publications',
          link: '/publications',
          icon: '#'
        }, {
          text: 'Thesis',
          link: '/thesis',
          icon: '#'
        }, {
          text: 'Events mgt',
          link: '/events',
          icon: '#'
        }, {
          text: 'Github page',
          link: 'https://github.com/annamikmorozova',
          icon: 'fa-github'
        }, {
          text: 'Contact me',
          link: '/contact',
          icon: '#'
        }]
      }
    }
    render() {
      let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}></i><a href={link.link}>{link.text}</a></li>);
  
      return (
          <div className={this.props.menuStatus} id='menu'>
            <ul>
              { links }
            </ul>
          </div>
      )
    }
  }

