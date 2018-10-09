import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import CreateSummoner from './CreateSummoner';
import iconFile from './Icon.jpg';
import iconSaveFile from './saveIcon.png';
import newIconFile from './newIcon.png';

const Icon = {
    src: iconFile,
    alt: 'Current Icon',
};

const iconSave = {
    src: iconSaveFile,
    alt: 'Save Icon',
};

const iconNew = {
    src: newIconFile,
    alt: 'New Icon',
};

class Verify extends Component {
  constructor(props){
    super(props);
    this.state = {
      summonerNameVerify: this.props.summoner,
      summonerIconVerify: this.props.icon,
      verify: false,
      verifyError: ""
    }
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    axios.post('/', qs.stringify(this.state))
    .then(res => {
      if(res.data === "changed") {
        this.setState({verify: true})
      }
      if(res.data === "not changed") {
        this.setState({verifyError: res.data})
      }
    })
  }

  render() {
    if(this.state.verify === true) {
      return (
        <CreateSummoner summoner={this.state.summonerNameVerify} icon={this.state.summonerIconVerify}/>
      );
    }
    return (
      <div className="Verify">
	<h1>Change your summoner icon <br /><img src={Icon.src} alt={iconSave.src} /><br />&darr;<br /><img src={iconSave.src} alt={iconSave} /><br />&darr;<br /><img src={iconNew.src} alt={iconNew} /><br />Then click verify</h1>
        <form onSubmit={this.submit}>
          <input type="submit" className="feedback-input" value="Verify" />
        </form>
        {this.state.verifyError}
      </div>
    );
  }
}

export default Verify;
