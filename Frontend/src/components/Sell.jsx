import React, { useState } from "react";
import { useState } from "react";

export default function Sell() {
    const [amount,setAmount]=useState("");
    const [name,setName]=useState("");
    const senddetails = async () => {
        //code to fetch post req to db
        if(name==="" || amount===""){
          alert("Give all the details please")
          return;
        }

        // const reponse = await axios.post("http://127.0.0.1:3000/sell", {
        //   name_user:name,
        //   amount:amount
        // });


    return (
        <>
            <form>
                <div class="row mb-3 col-md-6 " style={{marginLeft:"20%" , marginTop:"10%"}}>
                    <label for="inputEmail3" class="col-sm-2 col-form-label" style={{color:"white"}}><strong>Name : </strong></label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name_" placeholder="Abhranil Mondal" onchange={(e)=>{setName(e.target.value);}}  value={name_}/>
                    </div>
                </div>
                <div class="row mb-3 col-md-6" style={{marginLeft:"20%" }}>
                    <label for="inputPassword3" class="col-sm-2 col-form-label" style={{color:"white"}}><strong>Amount :</strong></label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="amount" placeholder="3000" onChange={(e)=>{setAmount(e.target.value);}}  value={amount}/>
                    </div>
                </div>
                
                
                <button type="submit" class="btn btn-primary col-md-2 " style={{marginLeft:"40%"}}
                 onClick={(e) => {
                    senddetails(e);
                  }}>
                    Submit</button>
            </form>

        </>
    )
};

