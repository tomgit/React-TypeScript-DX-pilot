import React, { Component } from 'react';
import { RequestHandler } from '../service/RequestHandler'
import { NativeEventInfo } from 'devextreme/events';
import Button from 'devextreme-react/button';
import TextBox from 'devextreme-react/text-box';

interface IProps {}

interface IState {
    username: string;
    pwd: string;
}

export default class Login extends Component<IProps, IState> {

    constructor( props: IProps ) {
        super(props);
        this.state = { username: 'admin', pwd:'pass' };
    }    

    loginClick = () => {
        let md5 = require("md5"); 
        let pwdHash = md5(this.state.pwd);
        RequestHandler.fetchAsync("Login?user="+this.state.username+"&pass="+pwdHash)
        .then(data => {
            console.log(data[0].success);
        })
    }

    setUser = (e: NativeEventInfo<TextBox> & any) => {this.setState({ username: e.value }); }
    setPassword = (e: NativeEventInfo<TextBox> & any) => {this.setState({ pwd: e.value }); }

    render() {
        return (
            <div>
                <div className="login" id="LoginDiv">Felhasználónév:<br />
                    <TextBox defaultValue={this.state.username} width="200" onValueChange={this.setUser} ></TextBox><br />Jelszó:<br />
                    <TextBox defaultValue={this.state.pwd} width="200" mode="password" onValueChange={this.setPassword} ></TextBox><br /><br />
                    <Button text="Bejelentkezés" id="loginButton" onClick={this.loginClick}/>
                </div>
            </div>
        );
    }

}
