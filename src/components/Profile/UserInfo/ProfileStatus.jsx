import React, { Component } from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({
      //async method
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div className={s.profileStatus}>
        {!this.state.editMode && (
          <div className={s.status}>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------------'}</span>
          </div>
        )}
        {this.state.editMode && (
          <div className={s.input__block}>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              className={s.input}
              type='text'
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
