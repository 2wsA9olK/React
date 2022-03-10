import React from "react";
import Preloader from '../common/preloader';

class ProfileStatus extends React.Component {

    state = {
        editeMode: false,
        status: this.props.status 
    }   

    activateEditeMode = () => {
        console.log('this:', this)
        this.setState( {
            editeMode: true
        } )
    };

    deactivateEditeMode = () => {

        this.setState( {
            editeMode: false
        } );
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState( {
                status: this.props.status
            });
        }

        console.log('componentDidUpdate');
    };

    render() {
        return (<div>
            
            {!this.state.editeMode &&   
                <div>
                    <span onDoubleClick={this.activateEditeMode}>{this.props.status || "Установите статус" }</span>
                </div>
            }
            {this.state.editeMode &&
                <div>
                    <input onChange={this.onStatusChange} type="text" autoFocus={true} onBlur={this.deactivateEditeMode} value={this.state.status} />
                </div>
            }
        </div>
        )
    };
};

export default ProfileStatus;