import React, { useState } from "react";

function Samplealert() {
  const [success, setShowSuccess] = useState(false);
  function showAlert() {
    setShowSuccess(true);
    setTimeout(() => {
      window.location.href = "/loginupdate"; // Redirect to login page
      setShowSuccess(false);
    }, 2500);
  }
  return (
  <div className="wrappingDiv m-5">
    <button className="btn btn-primary" onClick={showAlert}> nokku ra</button>
    {success && (
                    <div className="alert alert-success" role="alert" style={{ marginTop: "1rem" }}>
                      Signup successful! Redirecting to login page...
                    </div>
                  )}
        
  </div>
);
}

export default Samplealert;
