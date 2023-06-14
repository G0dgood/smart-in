import { useEffect, useState, } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, } from "react-redux";
import { Button } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const UserProfile = ({
  setShowProfile,
  showProfile
}: any) => {
  const dispatch = useDispatch();
  // @ts-ignore  
  const UserDetails = JSON.parse(localStorage.getItem("userin"));

  //  Update Current Password State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [activeTab, setActiveTab] = useState(0);
  const [result, setResult] = useState("Edit Profile");
  const Edit = ["Edit Profile", "Reset Password", "Upload Image"];

  const [inputs, setInputs] = useState<any>({
    firstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
  })

  const { user } = UserDetails

  useEffect(() => {
    setInputs((prevState: any) => {
      return ({
        ...prevState,
        firstName: user?.firstName,
        LastName: user?.LastName,
        email: user?.email,
        phoneNumber: user?.phoneNumber
      });
    });
  }, [setInputs, user?.LastName, user?.email, user?.firstName, user?.phoneNumber]);



  const handleOnChange = (input: any, value: any) => {
    setInputs((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };

  return (
    <div>
      <Modal
        size="lg"
        show={showProfile}
        onHide={() => setShowProfile(false)}
        aria-labelledby="example-modal-sizes-title-lg">

        <Modal.Header>
          <span></span>
          <span className="span-center-title">Profile Update</span>
          <Button style={{ color: "#fff" }} onClick={() => setShowProfile(false)}>
            <MdOutlineClose size={28} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="container-head">
              <div className="page-btn-title">
                {/* {Edit.map((catagory, i) => (
                  <Button
                    className={activeTab === i ? "btn-case active" : "btn-case"}
                    // onClick={() => {
                    //   showInfo(catagory);
                    //   setActiveTab(i);
                    // }}
                    key={i}>
                    {catagory}
                  </Button>
                ))} */}
              </div>
            </div>
            <div className="container-body">
              <div className="profile-picture m-4">
                <FaUserCircle size={120} />
              </div>

              <div>
                {result === "Edit Profile" && (
                  <form action=""  >
                    <h6 className="text-center">Edit Personal Information</h6>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"


                          value={inputs?.firstName}
                          onChange={(e) => handleOnChange("firstName", e.target.value)}

                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"



                          value={inputs?.LastName}
                          onChange={(e) => handleOnChange("LastName", e.target.value)}
                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"



                          disabled
                          value={inputs?.email}
                          onChange={(e) => handleOnChange("email", e.target.value)}
                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"



                          value={inputs?.phoneNumber}
                          onChange={(e) => handleOnChange("phoneNumber", e.target.value)}
                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"
                          value={inputs?.role}
                          onChange={(e) => handleOnChange("role", e.target.value)}
                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <input
                          className="input-Outline"
                          id="outlined-basic"


                          // value={inputs?.laptopStatus}
                          // onChange={(e) => handleOnChange("laptopStatus", e.target.value)}
                          style={{ marginBottom: "15px" }}
                        />
                      </div>
                    </div>

                    {/* <Button
                      className="table-link"
                      type="submit"
                      value="Submit"
                      variant="contained" */}
                    {/* // disabled={loading && true} */}

                    {/* {loading ? "UPDATING..." : "UPDATE"} */}
                    {/* UPDATE
                    </Button> */}
                  </form>
                )}
                {result === "Reset Password" && (
                  <form  >
                    <h6 className="text-center">Reset Password</h6>
                    <input
                      className="input-Outline"
                      id="outlined-basic"


                      style={{ marginBottom: "15px" }}
                      value={currentPassword}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value);
                      }}
                    />

                    <input
                      id="outlined-basic"



                      style={{ marginBottom: "15px" }}
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                    <input
                      id="outlined-basic"

                      // size="normal"

                      style={{ marginBottom: "15px" }}
                      value={confirmNewPassword}
                      onChange={(e) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                    />
                    <div id="btn-flex">
                      <Button
                        className="table-link "
                        type="submit"
                        value="Submit"
                        disabled={false && true}>
                        {false ? "UPDATING..." : "UPDATE"}
                      </Button>
                    </div>

                  </form>
                )}

              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserProfile;
