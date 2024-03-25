import React, { useEffect, useState } from 'react';

function ImageUpload() {
    const[image,setImage] = useState("");
    const[allImage,setallImage]=useState([]);
  function convertToBase64(e)
  {
      console.log(e);
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload= () =>
      {
        console.log(reader.result);
        setImage(reader.result);
      };
      reader.onerror = error =>
      {
        console.log("Error: ",error);
      };
  }

    useEffect(()=>{
        getImage()
    },[])
  function uploadImage() {
    fetch("https://adan-pradan-backend.onrender.com/AdanPradan/upload-image", {
      method: "POST", // Use POST instead of GET
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  function getImage()
  {
    fetch('https://adan-pradan-backend.onrender.com/AdanPradan/get-images',{
        method:'GET',
    }).then((res)=>res.json())
        .then((data)=> {console.log(data)
    setallImage(data.data)
    console.log(allImage)
    })
  }
  return (
    <div className="auth-wrapper">
      <div className="auth-inner "  style={{width:"auto"}}>
        <h1>Let's upload images</h1>
        Add your image upload input here
        <input accept="image/*" type="file" onChange={convertToBase64}></input>
        {image=="" ||image==null?"":<img width={100} height={100} src={image}/>}
        <button onClick={(uploadImage)} >upload </button>
        {allImage.map(data=>
            {
                return (<img width={100} height={100} src={data.image}/>)
            })}
      </div>
    </div>
  );
}

export default ImageUpload;
