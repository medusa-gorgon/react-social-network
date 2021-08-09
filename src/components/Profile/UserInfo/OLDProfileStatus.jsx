import React, { Component } from 'react';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { createField, Input } from '../../common/FormsControls/FormsControls';
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
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    return (
      <div className={s.profileStatus}>
        {!this.state.editMode && (
          <div className={s.status}>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------------'}</span>
          </div>
        )}
        {this.state.editMode && (
          // createField(s.input__block, s.input, 'enter your bio', 'status', 'text', [maxLengthCreator(15)], Input, {
          //       onChange: this.onStatusChange,
          //       autoFocus: true,
          //       onBlur: this.deactivateEditMode,
          //       value: this.state.status,
          // }
          <div className={s.input__block}>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}
              className={s.input}
              type='text'
              validate={[maxLengthCreator(15)]}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
