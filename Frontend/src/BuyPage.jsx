import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import LoaderPage from "./LoaderPage";
// import Body from "./components/Body";


function BuyPage() {
    
 

  const [dataObj, setDataObj] = useState([]);
    useEffect(() => {
        fetchItems();
       
    }, []);
    return (
        <>
            <Navbar />
            {/* <Body /> */}
            {dataObj.length === 0 ? (
        <>
          <LoaderPage/>
        </>
      ) : (
        dataObj.map((item, key) => {
          return (
            <SellCards
              key={key}
              seller={item.username}
              rollno={item.rollno}
              hall={item.hall}
              email={item.email}
              phno={item.phno}
              pdtype={item.product}
              descp={item.descp}
              price={item.amt}
              status={item.status}
              people={item.people}
            />
          );
        })
      )}
    </>
  );

        </>
    )
}

export default BuyPage;