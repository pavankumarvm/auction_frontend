import * as React from "react";
import ProgressBar from "../../../components/progressBar/progressBarComponent";
import "./dashboard.css";

class Dashboard extends React.Component {
  state = {
    activeName: "",
    form: {
      name: "Pavan",
      username: "pavankumarvm",
      email: "pavan@gmail.com",
    },
    editEnabled: false,
    updateStatus: "Update Profile",
    updateProgress: 0,
  };

  // onProfileEdit = (event) => {
  //   this.setState({
  //     form: {
  //       ...this.state.form,
  //       [event.target.name]: event.target.value,
  //     },
  //   });
  // };

  // onClickEdit = (event) => {
  //   this.setState({
  //     updateStatus: "Update Profile",
  //     editEnabled: true,
  //   });
  // };

  // onClickUpdate = (event) => {
  //   console.log(this.state.form);
  //   this.setState({
  //     updateStatus: "Updating...",
  //     editEnabled: true,
  //   });

  //   var progress = setInterval(() => {
  //     if (this.state.updateProgress < 100)
  //       this.setState({
  //         updateProgress: this.state.updateProgress + 1,
  //       });
  //     // console.log(this.state.updateProgress);
  //   }, 30);

  //   setTimeout(() => {
  //     this.setState({
  //       updateStatus: "Profile updated.",
  //     });
  //     clearInterval(progress);
  //   }, 3000);

  //   setTimeout(() => {
  //     this.setState({
  //       editEnabled: false,
  //       updateProgress: 0,
  //     });
  //   }, 5000);
  // };

  // @override
  render() {
    return (
      <div className="dashboard col">
        <div className="row">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="nameInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameInput"
                name="name"
                value={this.state.form.name}
                // onChange={this.onProfileEdit}
                placeholder="Pavan"
                disabled={!this.state.editEnabled}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="emailInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={this.state.form.email}
                // onChange={this.onProfileEdit}
                placeholder="name@example.com"
                disabled={!this.state.editEnabled}
              />
            </div>
            <div className="form-group mb-3">
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
                  // onChange={this.onProfileEdit}
                  aria-label="Username"
                  disabled={!this.state.editEnabled}
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="row flex-row">
          {!this.state.editEnabled ? (
            <button
              className="btn btn-primary btn-edit"
              type="button"
              // onClick={this.onClickEdit}
            >
              <i className="fa fa-pencil-square-o  fa-2" aria-hidden="true"></i>
              &nbsp;Edit Profile
            </button>
          ) : (
            <div>
              <button
                className="btn btn-success btn-update mb-2"
                type="button"
                // onClick={this.onClickUpdate}
              >
                <i
                  className="fa fa-pencil-square-o fa-2"
                  aria-hidden="true"
                ></i>
                &nbsp;{this.state.updateStatus}
              </button>
              className="mx-4"
              <div>
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
    );
  }
}

export default Dashboard;
