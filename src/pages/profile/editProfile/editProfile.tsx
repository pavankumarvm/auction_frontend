import * as React from "react";
import ProgressBar from "../../../components/progressBar/progressBarComponent";
import "./editProfile.css";

class EditProfile extends React.Component {
  state = {
    activeName: "",
    form: {
      first_name: "Pavan",
      last_name: "Maurya",
      username: "pavankumarvm",
      email: "pavan@gmail.com",
      phoneNo: "9158686367",
      gender: "Male",
    },
    editEnabled: false,
    updateStatus: "Update Profile",
    updateProgress: 0,
  };

  onProfileEdit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({
      form: {
        ...this.state.form,
        [event.currentTarget.name]: event.currentTarget.value,
      },
    });
  };

  onClickEdit = () => {
    this.setState({
      updateStatus: "Update Profile",
      editEnabled: true,
    });
  };

  onClickUpdate = () => {
    console.log(this.state.form);
    this.setState({
      updateStatus: "Updating...",
      editEnabled: true,
    });

    var progress = setInterval(() => {
      if (this.state.updateProgress < 100)
        this.setState({
          updateProgress: this.state.updateProgress + 1,
        });
      // console.log(this.state.updateProgress);
    }, 30);

    setTimeout(() => {
      this.setState({
        updateStatus: "Profile updated.",
      });
      clearInterval(progress);
    }, 3000);

    setTimeout(() => {
      this.setState({
        editEnabled: false,
        updateProgress: 0,
      });
    }, 5000);
  };

  // @override
  render() {
    return (
      <div className="editProfile">
        <div className="row pt-3">
          <h2>Edit Profile</h2>
        </div>
        <hr />
        <div className="col-md-12">
          <form className="row">
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="nameInput" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="first_name"
                value={this.state.form.first_name}
                onChange={this.onProfileEdit}
                placeholder="Pavan"
                disabled={!this.state.editEnabled}
              />
            </div>
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="nameInput" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="last_name"
                value={this.state.form.last_name}
                onChange={this.onProfileEdit}
                placeholder="Pavan"
                disabled={!this.state.editEnabled}
              />
            </div>
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={this.state.form.email}
                onChange={this.onProfileEdit}
                placeholder="name@example.com"
                disabled={!this.state.editEnabled}
              />
            </div>
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="usernameInput" className="form-label">
                Gender
              </label>
              <select
                className="form-control"
                id="usernameInput"
                placeholder="Gender"
                name="gender"
                // onSelect={()=>{this.onProfileEdit}}
                aria-label="Username"
                disabled={!this.state.editEnabled}
                aria-describedby="basic-addon1"
              >
                <option value={this.state.form.gender}>
                  {this.state.form.gender}
                </option>
                <option value={"Female"}>{"Female"}</option>
                <option value={"Others"}>{"Others"}</option>
              </select>
            </div>
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="emailInput" className="form-label">
                Phone Number
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  +91
                </span>
                <input
                  type="number"
                  className="form-control"
                  id="emailInput"
                  name="phone_no"
                  value={this.state.form.phoneNo}
                  onChange={this.onProfileEdit}
                  placeholder="name@example.com"
                  disabled={!this.state.editEnabled}
                />
              </div>
            </div>
            <div className="col-md-6 form-group mb-3">
              <label htmlFor="usernameInput" className="form-label">
                Username
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="usernameInput"
                  placeholder="Username"
                  name="username"
                  value={this.state.form.username}
                  onChange={this.onProfileEdit}
                  aria-label="Username"
                  disabled={!this.state.editEnabled}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </form>
          <div className="row flex-row">
            {!this.state.editEnabled ? (
              <button
                className="btn btn-primary btn-edit"
                type="button"
                onClick={this.onClickEdit}
              >
                <i
                  className="fa fa-pencil-square-o  fa-2"
                  aria-hidden="true"
                ></i>
                &nbsp;Edit Profile
              </button>
            ) : (
              <div>
                <button
                  className="btn btn-success btn-update mb-2"
                  type="button"
                  onClick={this.onClickUpdate}
                >
                  <i
                    className="fa fa-pencil-square-o fa-2"
                    aria-hidden="true"
                  ></i>
                  &nbsp;{this.state.updateStatus}
                </button>

                <div className="mx-4">
                  <ProgressBar
                    bgcolor="green"
                    progress={this.state.updateProgress}
                    height={20}
                    textdisplay="none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
